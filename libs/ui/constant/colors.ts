export type Color = string;

export interface Colors {
    Primary: { value: Color };
    Secondary: {
        T15: { value: Color };
        T75: { value: Color };
    };
}
const COLORS: Colors = {
    Primary: { value: '#2DD7AE' },
    Secondary: { T15: { value: '#201850' }, T75: { value: '#1f1750' } },
};
export default COLORS;