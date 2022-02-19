const foregroundColor = '#6f6f6f'
const backgroundColor = '#1b1d1e'
const cursorColor = '#fcef0c'

exports.decorateConfig = config => {
    return Object.assign({}, config, {
        backgroundColor,
        foregroundColor,
        cursorColor,
        colors: [
            '#1b1d1e',
            '#e6dc44',
            '#c8be46',
            '#f4fd22',
            '#737174',
            '#747271',
            '#62605f',
            '#c6c5bf',
            '#505354',
            '#fff78e',
            '#fff27d',
            '#feed6c',
            '#919495',
            '#9a9a9d',
            '#a3a3a6',
            '#dadbd6'
        ]
    })
}