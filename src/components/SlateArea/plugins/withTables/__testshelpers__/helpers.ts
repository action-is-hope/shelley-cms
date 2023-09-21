import type { Table, TableBody, TableHead } from "../tableTypes";

export const createTestTableValue = (): Table[] => [
  {
    type: "table",
    children: [createTableBody(), createTestTableHead()],
  },
];

const createTableBody = (): TableBody => ({
  type: "table-body",
  children: [
    {
      type: "table-row",
      children: [
        {
          type: "table-cell",
          children: [{ type: "paragraph", children: [{ text: "" }] }],
        },
        {
          type: "table-cell",
          children: [{ type: "paragraph", children: [{ text: "" }] }],
        },
        {
          type: "table-cell",
          children: [{ type: "paragraph", children: [{ text: "" }] }],
        },
      ],
    },
    {
      type: "table-row",
      children: [
        {
          type: "table-cell",
          children: [{ type: "paragraph", children: [{ text: "" }] }],
        },
        {
          type: "table-cell",
          children: [{ type: "paragraph", children: [{ text: "" }] }],
        },
        {
          type: "table-cell",
          children: [{ type: "paragraph", children: [{ text: "" }] }],
        },
      ],
    },
  ],
});

export const createTestTableHead = (): TableHead => ({
  type: "table-head",
  children: [
    {
      type: "table-row",
      children: [
        {
          type: "table-header-cell",
          children: [{ text: "" }],
        },
        {
          type: "table-header-cell",
          children: [{ text: "" }],
        },
        {
          type: "table-header-cell",
          children: [{ text: "" }],
        },
      ],
    },
  ],
});

export const createTestTableValueWithMenus = (): Table[] => [
  {
    type: "table",
    children: [
      // table-head at the top.
      {
        type: "table-head",
        children: [
          {
            type: "table-row",
            children: [
              {
                type: "table-cell-empty",
                children: [{ text: "" }],
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }],
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }],
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }],
              },
            ],
          },
          // The original table head row, but with an added empty cell.
          {
            type: "table-row",
            children: [
              {
                type: "table-cell-empty",
                children: [{ text: "" }],
              },
              {
                type: "table-header-cell",
                children: [{ text: "" }],
              },
              {
                type: "table-header-cell",
                children: [{ text: "" }],
              },
              {
                type: "table-header-cell",
                children: [{ text: "" }],
              },
            ],
          },
        ],
      },
      {
        type: "table-body",
        children: [
          {
            type: "table-row",
            children: [
              // Menu here:
              {
                type: "table-row-menu",
                children: [{ text: "" }],
              },
              // The original cells after.
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
            ],
          },
          {
            type: "table-row",
            children: [
              // Menu here:
              {
                type: "table-row-menu",
                children: [{ text: "" }],
              },
              // The original cells after.
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const createTestTableValueWithoutHead = (): Table[] => [
  {
    type: "table",
    children: [
      {
        type: "table-body",
        children: [
          {
            type: "table-row",
            children: [
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
            ],
          },
          {
            type: "table-row",
            children: [
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const createTestTableValueWithoutHeadWithMenus = (): Table[] => [
  {
    type: "table",
    children: [
      // table-head at the top.
      {
        type: "table-head",
        children: [
          {
            type: "table-row",
            children: [
              {
                type: "table-cell-empty",
                children: [{ text: "" }],
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }],
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }],
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }],
              },
            ],
          },
        ],
      },
      {
        type: "table-body",
        children: [
          {
            type: "table-row",
            children: [
              // Menu here:
              {
                type: "table-row-menu",
                children: [{ text: "" }],
              },
              // The original cells after.
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
            ],
          },
          {
            type: "table-row",
            children: [
              // Menu here:
              {
                type: "table-row-menu",
                children: [{ text: "" }],
              },
              // The original cells after.
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              },
            ],
          },
        ],
      },
    ],
  },
];
