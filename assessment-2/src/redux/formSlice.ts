import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormValues {
  roomType: string;
  addOns: string[];
  startDate: string;
  endDate: string;
  totalPrice: number;
}

interface SubmitFormPayload {
  formValues: FormValues;
}

interface FormState {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
  formValues: FormValues | null;
}

const initialState: FormState = {
  submitting: false,
  submitted: false,
  error: null,
  formValues: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitFormStart: (state) => {
      state.submitting = true;
      state.submitted = false;
      state.error = null;
    },
    submitFormSuccess: (state, action: PayloadAction<SubmitFormPayload>) => {
      state.submitting = false;
      state.submitted = true;
      state.error = null;
      state.formValues = action.payload.formValues;
    },
    submitFormFailure: (state, action: PayloadAction<string>) => {
      state.submitting = false;
      state.submitted = false;
      state.error = action.payload;
    },
  },
});

export const { submitFormStart, submitFormSuccess, submitFormFailure } = formSlice.actions;

export default formSlice.reducer;
