import { Table, TableColumnsType } from 'antd';
import { DateTime } from 'luxon';
import { map } from 'lodash';
import { EventResponse, EventsResponse } from '@it-meetup/dto';

interface ListWithPaginationType {
  data: any;
}
export const ListWithPagination = (params: ListWithPaginationType) => {
  const dataSource = params.data;
  const firstExpandedRowColumns: TableColumnsType<EventResponse> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
    },
    {
      title: 'Organisation',
      dataIndex: 'organisation',
      key: 'organisation',
      width: '20%',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '20%',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'dateMeetup',
      width: '20%',
      render: (date) => <div>{transformDate(date)}</div>,
    },
  ];
  const mainColumns: TableColumnsType<EventsResponse> = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  const transformDate = (date: string) => {
    return DateTime.fromISO(date, { zone: 'utc' })
      .setZone(DateTime.local().zoneName)
      .toFormat('yyyy/MM/dd HH:mm');
  };

  const useFirstExpandedRow = (record: EventsResponse) => {
    return (
      <Table
        rowKey={(record) => record.id}
        columns={firstExpandedRowColumns}
        dataSource={record.data}
        pagination={false}
      />
    );
  };

  return (
    <div className="container mx-auto p-4">
      {dataSource.length > 0 ? (
        <Table
          dataSource={map(dataSource, (data: any, rowIndex: number) => ({
            ...data,
            rowIndex,
          }))}
          rowKey={(record) => record.rowIndex}
          expandable={{
            expandedRowRender: useFirstExpandedRow,
            defaultExpandAllRows: true,
          }}
          columns={mainColumns}
          pagination={{
            position: ['bottomRight'],
            total: dataSource.length,
            defaultPageSize: 2,
          }}
        />
      ) : null}
    </div>
  );
};
