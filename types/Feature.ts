export interface Geometry {
    type: string;
    coordinates: [number, number];
}

export interface Properties {
    fac_nam: string;
    fac_tel: string;
    cat_nam: string;
    fac_o_add:string;
    fac_n_add: string;
}

export interface Feature {
    type: string;
    geometry: Geometry;
    properties: Properties;
    id: string;
}