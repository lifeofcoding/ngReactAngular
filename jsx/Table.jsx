var Table = React.createClass({
    propTypes: {
        model: React.PropTypes.object.isRequired
    },

    render: function() {
        var dataChunks = _.chunk(this.props.model.data, this.props.model.rows),
            generateRow = (columns) => {
              return columns.map(data => {
                  return (<td key={data.name}>{data.name}</td>)
              });
            },
            rows = dataChunks.map(columns => {
              var row = generateRow(columns);

              return (
                  <tr>{row}</tr>
              );
            }
        );

        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});
