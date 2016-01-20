var Table = React.createClass({displayName: "Table",
    propTypes: {
        model: React.PropTypes.object.isRequired
    },

    render: function() {
        var dataChunks = _.chunk(this.props.model.data, this.props.model.rows),
            generateRow = (columns) => {
              return columns.map(data => {
                  return (React.createElement("td", {key: data.name}, data.name))
              });
            },
            rows = dataChunks.map(columns => {
              var row = generateRow(columns);

              return (
                  React.createElement("tr", null, row)
              );
            }
        );

        return (
            React.createElement("table", null, 
                React.createElement("tbody", null, 
                    rows
                )
            )
        );
    }
});
