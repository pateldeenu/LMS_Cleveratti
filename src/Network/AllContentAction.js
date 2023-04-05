import AppSingleton from "../AppSingelton/AppSingelton";
import ApiUrl from "./UrlConfig";

export const userLoginApiHit = (userName, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.userLogin}`;
    let body = {
      username: userName,
      password: password,
      
    };
    dispatch(
      AppSingleton.getInstance().apiAction({
        url: finalUrl,
        method: "POST",
        data: body,
        onSuccess: (response) => {
          console.log("ddd", response);

          resolve(response);
        },
        onFailure: (error) => {
          console.log("error", error);
          reject(error);
        },
      })
    );
  });
};

// export const postSubmitQuestinApi =
//   (examType, assessId, candidateId, dataJson) => (dispatch) => {
//     return new Promise((resolve, reject) => {
//       let finalUrl = `${ApiUrl.baseUrl}${
//         examType == "viva"
//           ? ApiUrl.vivaAnswer + assessId + "/" + candidateId
//           : ApiUrl.demoAnswer + assessId + "/" + candidateId
//       }`;
//       let body = dataJson;
//       consoleLog("final url", finalUrl);
//       consoleLog("body", body);

//       dispatch(
//         AppSingleton.getInstance().apiAction({
//           url: finalUrl,
//           method: "POST",
//           data: body,
//           onSuccess: (response) => {
//             resolve(response);
//           },
//           onFailure: (error) => {
//             console.log("error", error);
//             reject(error);
//           },
//         })
//       );
//     });
//   };

// export const postauditAnswerApi = (dataJson) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.audiQues}`;
//     let body = dataJson;

//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "POST",
//         data: body,
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const candidateAnswerApi = (dataJson, assessmentId) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.candidateAnswer + assessmentId}`;
//     let body = dataJson;

//     consoleLog("final url", finalUrl);
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "POST",
//         data: body,
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const postAttendanceSubmitApi = (dataJson) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.assessor_attendance}`;
//     let body = dataJson;
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "POST",
//         data: body,
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const uploadInstructionImage = (dataJson) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.candidiateProfileUpdate}`;
//     let body = dataJson;
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "POST",
//         data: body,
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const uploadVideoTagApi = async (text, VideoFile, token) => {
//   let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.addTagVideo}`;
//   let respo = await apiPostWithTokenAndImage(text, VideoFile, finalUrl, token);
//   return respo;
// };

// const apiPostWithTokenAndImage = async (text, videoFile, finalUrl, token) => {
//   let formData = new FormData();
//   formData.append("video", {
//     name: "13nsame.mp4",
//     uri: videoFile,
//     type: "video/mp4",
//   });
//   formData.append("text", text);

//   consoleLog("body : " + formData);

//   try {
//     let response = await fetch(finalUrl, {
//       method: "post",
//       headers: {
//         accept: "application/json",
//         "x-access-token": token,
//         "Content-Type": "multipart/form-data",
//       },
//       body: formData,
//     });

//     return await response.json();
//   } catch (error) {
//     console.log("error : " + error);
//     return error;
//   }
// };

// export const getCandidateExamQuestion = (assessId) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.getQuestion + assessId}`;
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "GET",
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };
// export const getCheckStatusApi = (assessment_id, question_id) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${
//       ApiUrl.checkStatusApi + assessment_id + "/" + question_id
//     }`;
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "GET",
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const getCandidateExamList = () => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.examList + ""}`;

//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "GET",
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const getCandidateInstruction = (assessment_id) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.examInstruction + assessment_id}`;
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "GET",
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const getAuditQuestion = () => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.audiQues}`;
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "GET",
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const getLiveStreamingApi = () => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${`agora/rtc/6401e7d75df365a26e9ac17a/publisher/uid/0`}`;

//     console.log('live url',finalUrl)
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "POST",
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const getAssessorAssList = (api) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.assessorAssessmentList + api}`;
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "GET",
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const getAttendanceApi =
//   (batchId, startDate, endDate, status) => (dispatch) => {
//     return new Promise((resolve, reject) => {
//       let finalUrl = `${ApiUrl.baseUrl}${
//         status !== "track"
//           ? ApiUrl.assessor_attendance + "/" + batchId
//           : ApiUrl.assessor_attendance +
//             "?start_date=" +
//             startDate +
//             "&end_date=" +
//             endDate
//       }`;

//       consoleLog("url", finalUrl);

//       dispatch(
//         AppSingleton.getInstance().apiAction({
//           url: finalUrl,
//           method: "GET",
//           onSuccess: (response) => {
//             resolve(response);
//           },
//           onFailure: (error) => {
//             console.log("error", error);
//             reject(error);
//           },
//         })
//       );
//     });
//   };

// export const getAssessorBatchCandidateList = (api) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${
//       ApiUrl.assessorBatchCandidateList + api
//     }`;
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "GET",
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const getAssessorVivaList =
//   (examType, assessId, candidateId) => (dispatch) => {
//     return new Promise((resolve, reject) => {
//       let finalUrl = `${ApiUrl.baseUrl}${
//         examType == "viva"
//           ? ApiUrl.getAssViva + assessId + "/" + candidateId
//           : ApiUrl.getAssDemo + assessId + "/" + candidateId
//       }`;

//       consoleLog("finalUrl", finalUrl);

//       dispatch(
//         AppSingleton.getInstance().apiAction({
//           url: finalUrl,
//           method: "GET",
//           onSuccess: (response) => {
//             resolve(response);
//           },
//           onFailure: (error) => {
//             console.log("error", error);
//             reject(error);
//           },
//         })
//       );
//     });
//   };

// export const getAssessorTotalCountt = () => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.assessorTotalCountList}`;
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "GET",
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };

// export const postAttendaceApi = (candidate, attendance) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     let finalUrl = `${ApiUrl.baseUrl}${ApiUrl.postAttendace}`;

//     let body = {
//       candidate: candidate,
//       attendance: attendance,
//     };
//     dispatch(
//       AppSingleton.getInstance().apiAction({
//         url: finalUrl,
//         method: "POST",
//         data: body,
//         onSuccess: (response) => {
//           resolve(response);
//         },
//         onFailure: (error) => {
//           console.log("error", error);
//           reject(error);
//         },
//       })
//     );
//   });
// };
