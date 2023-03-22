import type { IComponentManifest, IComponentInstance } from "@mtbird/shared";
import { COMPONENT } from "@mtbird/core";
import { SchemaGenerator } from "@mtbird/core";

const { COMPONENT_DEFAULT_STYLE, SCHEMA_COMPONENT_BASIC_STYLE } = COMPONENT;

const VIDEO_TYPE_OPTIONS = [
  {
    value: "upload",
    label: "上传",
  },
  {
    value: "input",
    label: "输入",
  },
];

const manifest: IComponentManifest<IComponentInstance> = {
  type: "component",
  componentName: "Audio",
  title: "音频",
  icon: "mtbird-audio",
  desc: "",
  category: "basic",
  schema: [
    ...SCHEMA_COMPONENT_BASIC_STYLE,
    SchemaGenerator.collapsePanel(
      "音频",
      [
        SchemaGenerator.radio("音频来源", "data.fileType", VIDEO_TYPE_OPTIONS),
        SchemaGenerator.upload("音频地址", "props.src", {
          "pattern.display":
            'function(node) { return node?.data?.fileType === "upload"; }',
        }),
        SchemaGenerator.input("音频地址", "props.src", {
          "pattern.display":
            'function(node) { return node?.data?.fileType === "input"; }',
        }),
        SchemaGenerator.switch("循环播放", "props.loop"),
        SchemaGenerator.switch("自动播放", "props.autoPlay"),
      ],
      true
    ),
  ],
  instance: {
    type: "component",
    componentName: "Audio",
    props: {
      loop: true,
      autoPlay: true,
      src: "https://www.w3school.com.cn/i/song.ogg",
      style: {
        ...COMPONENT_DEFAULT_STYLE,
        height: 40,
        width: 40,
      },
    },
    data: {
      fileType: "upload",
    },
    children: [],
  },
};

export default manifest;
