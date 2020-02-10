export const LOAD_LITERALS = "LOAD_LITERALS";

export const loadLiterals = literals => ({
    type: LOAD_LITERALS,
    payload: literals,
});