import "styled-components";
import { ColorsType } from "../utils/theme/colors.type";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ColorsType;
    }
}
