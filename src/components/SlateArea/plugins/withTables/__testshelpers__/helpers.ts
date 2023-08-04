export const createTestTable = () => [
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
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              }
            ]
          },
          {
            type: "table-row",
            children: [
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              }
            ]
          }
        ]
      },
      createTestTableHead()
    ]
  }
];

export const createTestTableHead = () => ({
  type: "table-head",
  children: [
    {
      type: "table-row",
      children: [
        {
          type: "table-header-cell",
          children: [{ text: "" }]
        },
        {
          type: "table-header-cell",
          children: [{ text: "" }]
        },
        {
          type: "table-header-cell",
          children: [{ text: "" }]
        }
      ]
    }
  ]
});

export const createTestTableWithMenus = () => [
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
                children: [{ text: "" }]
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }]
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }]
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }]
              }
            ]
          },
          // The original table head row, but with an added empty cell.
          {
            type: "table-row",
            children: [
              {
                type: "table-cell-empty",
                children: [{ text: "" }]
              },
              {
                type: "table-header-cell",
                children: [{ text: "" }]
              },
              {
                type: "table-header-cell",
                children: [{ text: "" }]
              },
              {
                type: "table-header-cell",
                children: [{ text: "" }]
              }
            ]
          }
        ]
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
                children: [{ text: "" }]
              },
              // The original cells after.
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              }
            ]
          },
          {
            type: "table-row",
            children: [
              // Menu here:
              {
                type: "table-row-menu",
                children: [{ text: "" }]
              },
              // The original cells after.
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const createTestTableWithoutHead = () => [
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
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              }
            ]
          },
          {
            type: "table-row",
            children: [
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const createTestTableWithoutHeadWithMenus = () => [
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
                children: [{ text: "" }]
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }]
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }]
              },
              {
                type: "table-cell-menu",
                children: [{ text: "" }]
              }
            ]
          }
        ]
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
                children: [{ text: "" }]
              },
              // The original cells after.
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              }
            ]
          },
          {
            type: "table-row",
            children: [
              // Menu here:
              {
                type: "table-row-menu",
                children: [{ text: "" }]
              },
              // The original cells after.
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              },
              {
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }]
              }
            ]
          }
        ]
      }
    ]
  }
];
