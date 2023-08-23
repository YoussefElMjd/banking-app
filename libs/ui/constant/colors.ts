export type Color = string;

export interface Colors {
    Primary: { value: Color };
    Secondary: {
        T15: { value: Color };
        T75: { value: Color };
        Light: { value: Color };
    };
    TextDark: {
        T3: { value: Color };
        T25: { value: Color };
    };
    White: { value: Color };
}
const COLORS: Colors = {
    Primary: { value: '#2DD7AE' },
    Secondary: {
        T15: { value: '#201850' },
        T75: { value: '#1f1750' },
        Light: { value: '#302956' },
    },
    TextDark: {
        T3: { value: '#C2BCE4' },
        T25: { value: 'rgba(31, 23, 80,0.8)' },
    },
    White: { value: '#FFFFFF' },
};
export default COLORS;
