export type GetPeriodicTable = Element[];

export interface Element {
    alloys:                  string;
    atomicMass:              string;
    atomicNumber:            string;
    atomicRadius:            string;
    block:                   ElementBlock;
    boilingPoint:            string;
    bondingType:             BondingType;
    cpkHexColor:             string;
    crystalStructure:        string;
    density:                 string;
    electronAffinity:        string;
    electronegativity:       string;
    electronicConfiguration: string;
    facts:                   string;
    group:                   string;
    groupBlock:              string;
    ionRadius:               string;
    ionizationEnergy:        string;
    isotopes:                string;
    magneticOrdering:        string;
    meltingPoint:            string;
    molarHeatCapacity:       string;
    name:                    string;
    oxidationStates:         string;
    period:                  string;
    speedOfSound:            string;
    standardState:           StandardState;
    symbol:                  string;
    vanDelWaalsRadius:       string;
    yearDiscovered:          string;
    minerals:                string;
    history:                 string;
}

export enum ElementBlock {
    D = "d",
    Empty = "",
    F = "f",
    P = "p",
    S = "s",
}

export enum BondingType {
    Atomic = "atomic",
    CovalentNetwork = "covalent network",
    Diatomic = "diatomic",
    Empty = "",
    Metallic = "metallic",
}

export enum StandardState {
    Empty = "",
    Gas = "gas",
    IquidPredicted = "iquid (predicted)",
    Liquid = "liquid",
    Solid = "solid",
    SolidPredicted = "solid (predicted)",
}