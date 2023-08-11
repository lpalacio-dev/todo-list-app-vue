export interface MyFirebaseUser {
    uid: string;
    email: string | null;
    emailVerified: boolean;
    displayName: string | null;
    photoURL: string | null;
    phoneNumber: string | null;
    providerId: string;
    // Otras propiedades que necesites
}

export interface AuthResponse {
    uid:             string;
    email:           string;
    emailVerified:   boolean;
    displayName:     string;
    isAnonymous:     boolean;
    providerData:    ProviderDatum[];
    stsTokenManager: StsTokenManager;
    createdAt:       string;
    lastLoginAt:     string;
    apiKey:          string;
    appName:         string;
}

export interface ProviderDatum {
    providerId:  string;
    uid:         string;
    displayName: string;
    email:       string;
    phoneNumber: null;
    photoURL:    null;
}

export interface StsTokenManager {
    refreshToken:   string;
    accessToken:    string;
    expirationTime: number;
}
