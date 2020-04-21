import React, { useContext, useEffect, Fragment } from "react";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/activityStore";
import { RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { ActivityDetailedInfo } from "./ActivityDetailedInfo";
import { ActivityDetailedChat } from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import { ActivityDetailedSideBar } from "./ActivityDetailedSideBar";

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
}) => {
  const activityStore = useContext(ActivityStore);
  const { activity, loadActivity, loadingInitial } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [match.params.id, loadActivity]);

  if (loadingInitial || !activity)
    return <LoadingComponent content="Loading Activity" />;

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={10}>
          <ActivityDetailedHeader activity={activity} />
          <ActivityDetailedInfo activity={activity} />
          <ActivityDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <ActivityDetailedSideBar />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default observer(ActivityDetails);
