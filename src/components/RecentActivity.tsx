import { useState } from 'react';

interface ActivityItem {
  id: number;
  date: string;
  message: string;
  isImportant?: boolean;
}

const activityData: ActivityItem[] = [
  {
    id: 1,
    date: '16/11',
    message: 'Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"), tối thiểu mua 300k like, không giới hạn loại fanpage.',
    isImportant: true
  },
  {
    id: 2,
    date: '16/11',
    message: 'Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"), tối thiểu mua 300k like, không giới hạn loại fanpage.',
    isImportant: true
  },
  {
    id: 3,
    date: '16/11',
    message: 'Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"), tối thiểu mua 300k like, không giới hạn loại fanpage.',
    isImportant: true
  },
  {
    id: 4,
    date: '16/11',
    message: 'Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"), tối thiểu mua 300k like, không giới hạn loại fanpage.',
    isImportant: false
  },
  {
    id: 5,
    date: '16/11',
    message: 'Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"), tối thiểu mua 300k like, không giới hạn loại fanpage.',
    isImportant: false
  },
  {
    id: 6,
    date: '16/11',
    message: 'Nhận lại đơn hàng tăng like số lượng lớn (ở nhóm "dịch vụ khác"), tối thiểu mua 300k like, không giới hạn loại fanpage.',
    isImportant: false
  }
];

export function RecentActivity() {
  const [filterImportant, setFilterImportant] = useState(false);

  const filteredData = filterImportant 
    ? activityData.filter(item => item.isImportant)
    : activityData;

  return (
    <div className="bg-white dark:bg-[#2a2a2a] rounded-[24px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] transition-colors w-full h-[290px]">
      <div className="flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-[#3167f3] rounded-full" />
            <h2 className="text-[#333333] dark:text-white transition-colors">Hoạt động mới</h2>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filterImportant}
              onChange={(e) => setFilterImportant(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-[#3167f3] focus:ring-[#3167f3] focus:ring-offset-0 cursor-pointer"
            />
            <span className="text-[14px] text-[#333333] dark:text-white transition-colors">
              Lọc thông báo quan trọng
            </span>
          </label>
        </div>

        {/* Activity List */}
        <div className="relative flex-1 overflow-y-auto mb-6">
          <div className="space-y-6">
            {filteredData.map((item, index) => (
              <div key={item.id} className="relative pl-16">
                {/* Vertical line */}
                {index < filteredData.length - 1 && (
                  <div className="absolute left-[34px] top-6 bottom-[-14px] w-[2px] bg-[#3167f3] dark:bg-[#3167f3]" />
                )}
                
                {/* Date */}
                <div className="absolute left-0 top-0">
                  <span className="text-[14px] text-[#888888] dark:text-gray-500">{item.date}</span>
                </div>

                {/* Blue dot */}
                <div className="absolute left-[29px] top-[6px] w-3 h-3 bg-[#3167f3] rounded-full border-[3px] border-white dark:border-[#2a2a2a]" />

                {/* Message */}
                <div className={`text-[14px] leading-[24px] transition-colors ${
                  index === filteredData.length - 1 
                    ? 'text-[#888888] dark:text-gray-600' 
                    : 'text-[#333333] dark:text-white'
                }`}>
                  {item.message}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-[#3167f3] hover:bg-[#2557d9] text-white px-8 py-3 rounded-full text-[14px] transition-colors duration-200">
            Xem tất cả thông báo
          </button>
        </div>
      </div>
    </div>
  );
}