export const menujson={
    "menus": [
    {
      "title": "General",
      "type": "header"
    },
    {
      "title": "Dashboard",
      "icon": "fa fa-tachometer-alt",
      "active": false,
      "type": "dropdown",
      "badge": {
        "text": "New ",
        "class": "badge-warning"
      },
      "submenus": [
        {
          "title": "Dashboard 1",
          "badge": {
            "text": "Pro ",
            "class": "badge-success"
          },
          "path":"/auth/signin"
        },
        {
          "title": "Dashboard 2",
          "path":"/dynamic/home"
        },
        {
          "title": "Dashboard 3",
          "path":"/dashboard/page"
        }
      ]
    },
    {
      "title": "Stats",
      "icon": "fa fa-shopping-cart",
      "active": false,
      "type": "dropdown",
      "badge": {
        "text": "3",
        "class": "badge-danger"
      },
      "submenus": [
        {
          "title": "Products",
          "path":"/auth/signin"
        },
        {
          "title": "Orders",
          "path":"/pricing"
        },
        {
          "title": "Credit cart",
          "path":"/"
        }
      ]
    },
    {
      "title": "Components",
      "icon": "far fa-gem",
      "active": false,
      "type": "dropdown",
      "submenus": [
        {
          "title": "General",
          "path":"/auth/signin"
          
        },
        {
          "title": "Panels",
          "path":"/pricing"
        },
        {
          "title": "Tables",
          "path":"/"
        },
        {
          "title": "Icons",
          "path":"/dashboard/page"
        },
        {
          "title": "Forms",
          "path":"/"
        }
      ]
    },
    {
      "title": "Charts",
      "icon": "fa fa-chart-line",
      "active": false,
      "type": "dropdown",
      "submenus": [
        {
          "title": "Pie chart",
          "path":"/auth/signin"
        },
        {
          "title": "Line chart",
          "path":"/pricing"
        },
        {
          "title": "Bar chart",
            "path":"/"
        },
        {
          "title": "Histogram",
          "path":"/dashboard/page"
        }
      ]
    },
    {
      "title": "Maps",
      "icon": "fa fa-globe",
      "active": false,
      "type": "dropdown",
      "submenus": [
        {
          "title": "Google maps",
          "path":"/auth/signin"
        },
        {
          "title": "Open street map",
          "path":"/pricing"
        }
      ]
    },
    {
      "title": "Extra",
      "type": "header"
    },
    {
      "title": "Documentation",
      "icon": "fa fa-book",
      "active": false,
      "type": "simple",
      "badge": {
        "text": "Beta",
        "class": "badge-primary"
      }
    },
    {
      "title": "Calendar",
      "icon": "fa fa-calendar",
      "active": false,
      "type": "simple"
    },
    {
      "title": "Examples",
      "icon": "fa fa-folder",
      "active": false,
      "type": "simple"
    }
  ]
}