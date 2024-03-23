export interface DataState {
    poster_path: string;
    title: string;
    total_events: number;
    category: string;
    id: number;
}
export interface spotLightState extends DataState {
    Date: string;
    Day: string;
    Time: string;
    Venue: string;
    Collection_Name: string;
}
export interface initialStateType {
    data: DataState[];
    spotLight: spotLightState[];
    adds: AddState[];
}

export interface AddState {
    id: number;
    poster_path: string;
    horizontal_image: string;
    title: string;
    description: string;
}