import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Headline from "../components/Headline";
import Paragraph from "../components/Paragraph";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["en_GB"], primary: false },
    filter: { entityTypes: ["faq"] },
    fields: ["slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};

export default function faq({ document }: TemplateProps) {
  return (
    <>
      <Paragraph value="Paragraph" textSize="base" fontWeight="normal" />
      <Headline
        value={`Headline ${document.meta.locale}`}
        textSize="xl"
        fontWeight="medium"
      />
    </>
  );
}
