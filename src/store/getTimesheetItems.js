// import axios from "axios";
//
// export const getTimesheetItems = {
//     state: () => ({
//         items: []
//     }),
//     actions: {
//         async getItems(state) {
//             try {
//                 const response = await axios.get('http://localhost/CodingOnSideOfServer/api/add_timesheet')
//                 state.items = response.data
//                 console.log(response.data)
//             } catch (e) {
//                 alert('error')
//             }
//         }
//     },
//     namespaced: true
// }