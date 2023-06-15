import React, { forwardRef } from "react";
import { Icon } from "@actionishope/shelley/Icon";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";
import { st, classes } from "./previewMetaData.st.css";

export interface PreviewMetaDataProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentBase {
  title: string;
  description: string;
  domain: string;
  fullScreenMode?: boolean;
  image: string;
  slug: string;
  previewMode?: number;
}

function PreviewMetaData(
  props: PreviewMetaDataProps,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    children,
    title,
    description,
    fullScreenMode = false,
    image,
    slug,
    domain,
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <div
      className={st(
        classes.root,
        {
          fullScreenMode,
        },
        classNameProp
      )}
      ref={ref}
      data-id={dataId}
      {...rest}
    >
      <div
        className={classes.chrome}
        data-id={dataId ? `${dataId}--chrome` : undefined}
      >
        <Google
          {...{ title, description, slug }}
          data-id={dataId ? `${dataId}--google` : undefined}
        />
        <Twitter
          {...{ title, description, image, domain }}
          data-id={dataId ? `${dataId}--twitter` : undefined}
        />
        <Facebook
          {...{ title, description, image, domain }}
          data-id={dataId ? `${dataId}--facebook` : undefined}
        />
        {children}
      </div>
    </div>
  );
}

/**
 * PreviewMetaData handles the Google listing and social sharing previews.
 */
const _PreviewMetaData = forwardRef(PreviewMetaData);
export { _PreviewMetaData as PreviewMetaData };

/**
 * MetaDataItems
 */
export interface PreviewMetaDataItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentBase {
  title: string;
  description: string;
  domain?: string;
  image?: string;
  slug?: string;
}

export const Google = ({
  title,
  description,
  slug,
  "data-id": dataId,
}: PreviewMetaDataItemProps) => (
  <article className={st(classes.previewItem, classes.google)}>
    <Icon
      viewBox="0 0 272 92"
      className={classes.googleLogo}
      aria-label="A preview of this page displayed as a Google search result."
      aria-hidden={false}
    >
      <path
        fill="#EA4335"
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#FBBC05"
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#4285F4"
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      />
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
      <path
        fill="#EA4335"
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      />
      <path
        fill="#4285F4"
        d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
      />
    </Icon>
    <aside className={classes.googleListing}>
      <p
        className={classes.googleUrl}
        data-id={dataId ? `${dataId}--googleUrl` : undefined}
      >
        {slug}
      </p>
      <p
        className={classes.googleTitle}
        data-id={dataId ? `${dataId}--googleTitle` : undefined}
      >
        {title}
      </p>
      <p
        className={classes.googleDescription}
        data-id={dataId ? `${dataId}--googleDescription` : undefined}
      >
        {description}
      </p>
    </aside>
  </article>
);

export const Twitter = ({
  title,
  description,
  domain,
  image,
  "data-id": dataId,
}: PreviewMetaDataItemProps) => (
  <article className={st(classes.previewItem, classes.twitter)}>
    <Icon
      viewBox="0 0 400 400"
      className={classes.twitterLogo}
      aria-label="A preview of how this page will look when shared on Twitter."
      aria-hidden={false}
    >
      <path
        fill="#1da1f2"
        d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
      />
    </Icon>

    <aside className={classes.twitterListing}>
      {image && (
        <img
          className={classes.twitterImage}
          src={image}
          alt=""
          data-id={dataId ? `${dataId}--twitterImage` : undefined}
        />
      )}
      <div className={classes.twitterText}>
        <p
          className={classes.twitterTitle}
          data-id={dataId ? `${dataId}--twitterTitle` : undefined}
        >
          {title}
        </p>
        <p
          className={classes.twitterDescription}
          data-id={dataId ? `${dataId}--twitterDescription` : undefined}
        >
          {description}
        </p>
        <p
          className={classes.twitterDomain}
          data-id={dataId ? `${dataId}--twitterDomain` : undefined}
        >
          <Icon viewBox="0 0 24 24" className={classes.twitterLinkIcon}>
            <g>
              <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z" />
              <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z" />
            </g>
          </Icon>
          {domain}
        </p>
      </div>
    </aside>
  </article>
);

export const Facebook = ({
  title,
  description,
  domain,
  image,
  "data-id": dataId,
}: PreviewMetaDataItemProps) => (
  <article className={st(classes.previewItem, classes.facebook)}>
    <Icon
      viewBox="0 0 266.893 266.895"
      className={classes.facebookLogo}
      aria-label="A preview of how this page will look when shared on facebook."
      aria-hidden={false}
    >
      <path
        id="Blue_1_"
        fill="#3C5A99"
        d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812 c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225 H248.082z"
      />
      <path
        id="f"
        fill="#FFFFFF"
        d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935 l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585 v99.803H182.409z"
      />
    </Icon>

    <aside className={classes.facebookListing}>
      <header>
        {image && (
          <img
            className={classes.facebookImage}
            src={image}
            alt=""
            data-id={dataId ? `${dataId}--facebookImage` : undefined}
          />
        )}
        <p
          className={classes.facebookDomain}
          data-id={dataId ? `${dataId}--facebookDomain` : undefined}
        >
          {domain}
        </p>
        <p
          className={classes.facebookTitle}
          data-id={dataId ? `${dataId}--facebookTitle` : undefined}
        >
          {title}
        </p>
        <p
          className={classes.facebookDescription}
          data-id={dataId ? `${dataId}--facebookDescription` : undefined}
        >
          {description}
        </p>
      </header>
    </aside>
  </article>
);
