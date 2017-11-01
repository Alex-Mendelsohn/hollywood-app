import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  Home,
  ListMovies,
  ListActors,
  EditMovies,
  EditActors,
  MovieDetails,
  ActorDetails,
  CreateMovie,
  CreateActor
} from "./views";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/movies"} component={ListMovies} />
          <Route exact path={"/actors"} component={ListActors} />
          <Route exact path={"/movies/new"} component={CreateMovie} />
          <Route exact path={"/actors/new"} component={CreateActor} />
          <Route exact path={"/movies/:movieId"} component={MovieDetails} />
          <Route exact path={"/actors/:actorId"} component={ActorDetails} />
          <Route exact path={"/movies/:movieId/edit"} component={EditMovies} />
          <Route exact path={"/actors/:actorId/edit"} component={EditActors} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
