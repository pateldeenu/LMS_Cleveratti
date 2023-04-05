// inspired by https://leanpub.com/redux-book
import axios from "axios";
import AppSingleton from "../AppSingelton/AppSingelton";
import { API } from "../redux/actiontypes/CommonTypes";
const appSingelton = AppSingleton.getInstance();
const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    // if (action.type !== API) return;

    const { url, method, data, accessToken, onSuccess, onFailure, label } =
      action.payload;
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    // if (appSingelton.userToken !== "") {
    //   axios.defaults.headers.common["x-access-token"] = appSingelton.userToken;
    // } else {
    // }

    // if (label) {
    //   dispatch(isLoading(true));
    // }

    axios
      .request({
        url,
        method,
        // headers,
        [dataOrParams]: data,
      })
      .then((response) => {
        // dispatch(isLoading(false));
        let action = onSuccess(response);
       console.log('ggg', JSON.stringify(action))
        if (action) {
          dispatch(action);
        }
      })
      .catch((error) => {
        console.log("error", error);
        let err = onFailure(error);
        // dispatch(isLoading(false));
        if (err) {
          dispatch(err);
        }
        if (error.response.status === 401) {
          // RootNavigation.navigate("authStack", { name: "" });
          // SimpleToast.show("Session expired");
        }
        //  console.log(error.response.status);
        //  console.log(error.response.headers);
        //   if (error.response && error.response.status === 403) {

        //   }
      })
      .finally(() => {
        // session Expired then yha se work karna hai Dinesh Kumar
        // dispatch(isLoading(false));
        // if (label) {
        //   dispatch(isLoadingFalse(false));
        // }
      });
  };

export default apiMiddleware;
