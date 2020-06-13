const presets = [
    [
        '@babel/preset-env',
        {
          "useBuiltIns": "entry",
          "corejs": 3
        }
    ],
];

const plugins = [
    '@babel/plugin-proposal-class-properties',
    [
        '@babel/plugin-transform-react-jsx',
        {
            "pragma": "h",
            "pragmaFrag": "Fragment",
        }

    ]
]

module.exports = { 
    presets,
    plugins
};