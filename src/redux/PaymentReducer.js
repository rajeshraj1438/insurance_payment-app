const initState = {
  list: [],

  refemp: {},
  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};

// ACTION TYPES
const PAYMENT_DONE = "PAYMENT_DONE";
const PAYMENT_UPDATE = "PAYMENT_UPDATE";
// const PAYMENT_DELETE = "PAYMENT_DELETE";
const PAYMENT_GET_ALL = "PAYMENT_GET_ALL";
const PAYMENT_GET_BY_ID = "PAYMENT_GET_BY_ID";

const REF_PAYMENT = "REF_PAYMENT";

// ACTIONS :: COmponents are interacting with this action
export function paymentDoneAction(payload) {
  // return { type: PAYMENT_DONE, payload: payload };

  // MAKE SURE redux-thunk is installed.
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/payment/create";
    const requestBody = { ...payload, age: 30 };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: PAYMENT_DONE, payload: payload });
  };
}

export function updatePaymentAction(payload) {
  // return { type: PAYMENT_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/employee/${payload.id}`;
    const requestBody = { ...payload, age: 25 };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefPayment({}));
  };
}

// export function deletePaymentAction(payload) {
//   // return { type: PAYMENT_DELETE, payload: payload };

//   // redux thunk
//   return async (dispatch) => {
//     const url = `http://localhost:8080/api/employee/${payload.id}`;
//     await fetch(url, { method: "DELETE" });

//     // update the ui.
//     dispatch(getAllPaymentAction());
//   };
// }

export function getAllPaymentAction(payload) {
  // return { type: PAYMENT_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/payment/findall";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const paymentList = await response.json();
    console.log(paymentList);

    // Update the UI
    dispatch({ type: PAYMENT_GET_ALL, payload: paymentList });
  };
}

export function getByIdPaymentAction(payload) {
  // return { type: PAYMENT_GET_BY_ID, payload: payload };
  return async (dispatch) => {
    const url = `http://localhost:8080/api/payment/find/${payload.id}`;
    const response = await fetch(url);
    const paymentObj = await response.json();

    // this wil update the refemp
    dispatch(updateRefPayment(paymentObj));
  };
}

export function updateRefPayment(payload) {
  return { type: REF_PAYMENT, payload: payload };
}

// REDUCER LOGIC
export function PaymentReducer(state = initState, action) {
  switch (action.type) {
    case PAYMENT_DONE:
      return { ...state, list: [action.payload, ...state.list] };
    case PAYMENT_UPDATE:
      // TODO
      return state;
    // case PAYMENT_DELETE:
    //   // TODO
    //   const oldList = state.list;
    //   oldList.splice(action.payload, 1);
    //   console.log("OL", oldList);

    //   return { ...state, list: [...oldList] };
    case PAYMENT_GET_ALL:
      // Update the list
      return { ...state, list: action.payload };
    case PAYMENT_GET_BY_ID:
      // TODO
      return state;

    case REF_PAYMENT:
      return { ...state, refemp: action.payload };

    default:
      return state;
  }
}
