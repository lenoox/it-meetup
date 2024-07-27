import { useEffect, useState } from 'react';
import { Table, TableColumnsType } from 'antd';
import { DateTime } from 'luxon';
import { EventDto, EventsDto } from '@it-meetup/dto';

export function ListWithPagination() {
  const [data, setData] = useState<EventsDto[]>([]);
  const firstExpandedRowColumns: TableColumnsType<EventDto> = [
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
  const mainColumns: TableColumnsType<EventsDto> = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: EventsDto[] = [
      {
        _id: 1,
        date: '2024-03',
        data: [
          {
            _id: '1',
            title: 'AWS Meetup X',
            organisation: 'AWS Meetup',
            description: 'AWS Meetup',
            category: 'AWS',
            date: '2024-03-05T17:00:00.000Z',
            user: '6680220e6b9d698b8e4234c1',
            createdAt: '2024-06-29T00:00:04.025Z',
            updatedAt: '2024-06-29T15:17:04.025Z',
            __v: 0,
          },
          {
            _id: '2',
            title: 'Azure Meetup III',
            organisation: 'Azure Meetup',
            description: 'AWS Meetup',
            category: 'Azure Meetup',
            date: '2024-03-05T17:00:00.000Z',
            user: '6680220e6b9d698b8e4234c1',
            createdAt: '2024-06-29T00:00:04.025Z',
            updatedAt: '2024-06-29T15:17:04.025Z',
            __v: 0,
          },
        ],
      },
      {
        _id: 2,
        date: '2024-04',
        data: [
          {
            _id: '3',
            title: 'AWS Meetup X',
            organisation: 'AWS Meetup',
            description: 'AWS Meetup',
            category: 'AWS',
            date: '2024-05-04T17:00:00.000Z',
            user: '6680220e6b9d698b8e4234c1',
            createdAt: '2024-06-29T00:00:04.025Z',
            updatedAt: '2024-06-29T15:17:04.025Z',
            __v: 0,
          },

          {
            _id: '4',
            title: 'Google Cloud IV',
            organisation: 'Azure Meetup',
            description: 'AWS Meetup',
            category: 'AWS',
            date: '2024-05-05T17:00:00.000Z',
            user: '6680220e6b9d698b8e4234c1',
            createdAt: '2024-06-29T00:00:04.025Z',
            updatedAt: '2024-06-29T15:17:04.025Z',
            __v: 0,
          },
        ],
      },
      {
        _id: 3,
        date: '2024-05',
        data: [
          {
            _id: '5',
            title: 'AWS Meetup X',
            organisation: 'AWS Meetup',
            description: 'AWS Meetup',
            category: 'AWS',
            date: '2024-05-05T17:00:00.000Z',
            user: '6680220e6b9d698b8e4234c1',
            createdAt: '2024-06-29T00:00:04.025Z',
            updatedAt: '2024-06-29T15:17:04.025Z',
            __v: 0,
          },
          {
            _id: '6',
            title: 'LDI',
            organisation: 'KUL',
            description: 'LDI',
            category: 'main',
            date: '2024-05-01T16:00:00.000Z',
            user: '6680220e6b9d698b8e4234c1',
            createdAt: '2024-06-29T16:00:00.025Z',
            updatedAt: '2024-06-29T15:17:04.025Z',
            __v: 0,
          },
          {
            _id: '7',
            title: 'Google Cloud V',
            organisation: 'Azure Meetup',
            description: 'AWS Meetup',
            category: 'AWS',
            date: '2024-05-05T17:00:00.000Z',
            user: '6680220e6b9d698b8e4234c1',
            createdAt: '2024-06-29T00:00:04.025Z',
            updatedAt: '2024-06-29T15:17:04.025Z',
            __v: 0,
          },
        ],
      },
    ];
    setData(response);
  };

  const transformDate = (date: string) => {
    return DateTime.fromISO(date, { zone: 'utc' })
      .setZone(DateTime.local().zoneName)
      .toFormat('yyyy/MM/dd HH:mm');
  };

  const useFirstExpandedRow = (record: EventsDto) => {
    return (
      <Table
        rowKey={(record) => record._id}
        columns={firstExpandedRowColumns}
        dataSource={record.data}
        pagination={false}
      />
    );
  };

  return (
    <div className="container mx-auto p-4">
      {data.length > 0 ? (
        <Table
          dataSource={data}
          rowKey={(record) => record._id}
          expandable={{
            expandedRowRender: useFirstExpandedRow,
            defaultExpandAllRows: true,
          }}
          columns={mainColumns}
          pagination={{
            position: ['bottomRight'],
            total: data.length,
            defaultPageSize: 2,
          }}
        />
      ) : null}
    </div>
  );
}

export default ListWithPagination;
