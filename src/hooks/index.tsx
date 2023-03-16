import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/index';
import { AuthProvider } from './useAuth';

const AppProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
);

export default AppProvider;
