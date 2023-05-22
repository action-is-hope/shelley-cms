import React, { forwardRef } from "react";
import type { ValueBase, AriaLabelingProps } from "@react-types/shared";
import { Radio, RadioGroup, Icon, ComponentBase } from "@actionishope/shelley";

import { st, classes } from "./previewModes.st.css";
import type { ShelleyComponentBase } from "../../typings/shared-types";

export type PreviewModeType = "web" | "mobile" | "tablet" | "laptop";

export interface PreviewModesProps
  extends ShelleyComponentBase,
    ValueBase<PreviewModeType>,
    AriaLabelingProps,
    ComponentBase {}

function PreviewModes(
  props: PreviewModesProps,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    onChange,
    defaultValue,
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <div
      className={st(classes.root, classNameProp)}
      {...rest}
      data-id={dataId}
      ref={ref}
    >
      <RadioGroup
        vol={false}
        orientation="horizontal"
        className={classes.controls}
        label="Select a preview mode:"
        labelPosition="hidden"
        onChange={(key) => onChange && onChange(key as PreviewModeType)}
        defaultValue={defaultValue}
        data-id={dataId ? `${dataId}--radioGroup` : undefined}
      >
        <Radio
          value="web"
          inputPosition="bottom"
          className={classes.control}
          data-id={dataId ? `${dataId}--optionWeb` : undefined}
        >
          <Icon
            className={classes.icon}
            alt="As seen on the web, as a Google search result etc"
            style={{ fontSize: "1.6em", marginTop: "-8px" }}
          >
            <g id="connect-o">
              <path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path>
            </g>
          </Icon>
        </Radio>

        <Radio
          value="laptop"
          inputPosition="bottom"
          className={classes.control}
          data-id={dataId ? `${dataId}--optionLaptop` : undefined}
        >
          <Icon className={classes.icon} alt="Laptop">
            <path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path>
          </Icon>
        </Radio>

        <Radio
          value="tablet"
          inputPosition="bottom"
          className={classes.control}
          data-id={dataId ? `${dataId}--optionTablet` : undefined}
        >
          <Icon className={classes.icon} alt="Tablet">
            <path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path>
          </Icon>
        </Radio>

        <Radio
          value="mobile"
          inputPosition="bottom"
          className={classes.control}
          data-id={dataId ? `${dataId}--optionMobile` : undefined}
        >
          <Icon className={classes.icon} alt="Mobile">
            <path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path>
          </Icon>
        </Radio>
      </RadioGroup>
    </div>
  );
}

/**
 * PreviewModes holds the input fields and the settings for the content blocks.
 */
const _PreviewModes = forwardRef(PreviewModes);
export { _PreviewModes as PreviewModes };
