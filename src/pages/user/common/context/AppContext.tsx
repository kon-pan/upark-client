import { SidebarProvider } from './SidebarContext';
import { AuthProvider } from './AuthContext';
import { combineComponents } from '../../../../util/combineComponents';

const providers = [SidebarProvider, AuthProvider];
export const AppContextProvider = combineComponents(...providers);
