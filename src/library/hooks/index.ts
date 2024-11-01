import { useContext } from "react";
import { LengaugeContext } from "../context";

export function useLenguage() {
    const Context = useContext(LengaugeContext);

    if (Context === null) throw new RangeError("Hooks are not in the context container");

    return Context;
}