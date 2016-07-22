import makeActionCreator from 'lib/makeActionCreator';
import { GO_TO_LOGIN, GO_TO_PRODUCT, GO_TO_MAIN } from 'constants/actionTypes';

export const goToLogin = makeActionCreator(GO_TO_LOGIN);
export const goToProduct = makeActionCreator(GO_TO_PRODUCT);
export const goToMain = makeActionCreator(GO_TO_MAIN);
