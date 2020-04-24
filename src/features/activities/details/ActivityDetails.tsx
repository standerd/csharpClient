import React, { useContext, useEffect, Fragment } from "react";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar";
import { RootStoreContext } from "../../../app/stores/rootStore";

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const rootStore = useContext(RootStoreContext);
  const { activity, loadActivity, loadingInitial } = rootStore.activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [match.params.id, loadActivity, history]);

  if (loadingInitial) return <LoadingComponent content="Loading Activity" />;

  if (!activity) return <h2>Not Found</h2>;

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
