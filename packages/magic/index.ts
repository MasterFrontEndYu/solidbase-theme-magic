import { defineTheme, type ThemeDefinition} from "@kobalte/solidbase/config";

type CustomThemeConfig = {};

const magicTheme: ThemeDefinition<CustomThemeConfig> = defineTheme({
        name: "magic",
});

export default magicTheme;
