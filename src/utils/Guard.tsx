import { useAuth } from '@hooks/useAuth';
import { Navigate } from 'react-router-dom';
import {getStorageToken} from "@utils/session";
import {useEffect} from "react";

type GuardType = 'authenticated' | 'canManageTeam' | 'canManageFarmer' | 'isMobile';

type GuardT = {
    guards: GuardType[];
    target: React.ReactElement;
};

function Guard({ target, guards }: GuardT): React.ReactElement {
    let redirectUrl = null;
    const { user } = useAuth();
    const token = getStorageToken()

    useEffect(() => {
        for (let i = 0; i < guards.length; i++) {
            switch (guards[i]) {
                case 'authenticated':
                    if (!user?.id) {
                        redirectUrl = '/login';
                    } else if (token) {
                        redirectUrl = '/';
                    }
                    break;
                default:
                    break;
            }
        }
    }, [user, token]);

    return redirectUrl ? <Navigate to={redirectUrl} replace/> : target;
}

export default Guard;
