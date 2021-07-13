import BootstrapTable from 'react-bootstrap-table-next';

const Tables = ({ products }) => {
  const columns = [
    {
      dataField: 'rank',
      text: 'Rank',
    },
    {
      dataField: 'name',
      text: 'Name',
    },
    {
      dataField: 'points',
      text: 'Points',
    },
  ];

  return (
    <>
      <BootstrapTable keyField="id" data={products} columns={columns} />
    </>
  );
};

export default Tables;
