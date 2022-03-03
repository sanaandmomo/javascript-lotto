import coveringTryCatch from './coveringTryCatch.js';
import {
  trySubmitFareForm,
  catchSubmitFareForm,
  toggleLottosView,
  writingWinningNumber,
  tryClickConfirmResultButton,
  catchClickConfirmResultButton,
  closeModal,
  restartApp,
} from './domain.js';

export const onSubmitFareForm = (e) => {
  e.preventDefault();

  coveringTryCatch(trySubmitFareForm, catchSubmitFareForm);
};

export const onChangeLottoViewerController = toggleLottosView;

export const onKeyUpWinningNumbers = (e) => {
  coveringTryCatch(() => writingWinningNumber(e), catchClickConfirmResultButton);
};

export const onClickConfirmResultButton = () => {
  coveringTryCatch(tryClickConfirmResultButton, catchClickConfirmResultButton);
};

export const onClickModalCloseButton = closeModal;

export const onClickRestartButton = restartApp;
