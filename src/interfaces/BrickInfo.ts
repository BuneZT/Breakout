export interface BrickInfo {
    count: {
        row: number;
        col: number;
    };
    width: number;
    height: number;
    padding: number;
    offset: {
        top: number;
        left: number;
    };
}