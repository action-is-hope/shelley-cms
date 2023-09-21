type LinkElement = {
  element: {
    url: string;
  };
} & Element;
export const LinkElement = ({ attributes, children, element }: LinkElement) => (
  <a {...attributes} href={element.url}>
    {children}
  </a>
);
