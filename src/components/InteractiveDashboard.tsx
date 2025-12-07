import { useState } from "react";
import Frame2144772184 from "../imports/Frame2144772184";
import { toast } from "sonner@2.0.3";

export function InteractiveDashboard() {
  const [balance, setBalance] = useState(1234567);
  const [monthlyDeposit, setMonthlyDeposit] = useState(1234567);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'deposit' | 'withdraw'>('all');

  const handleDeposit = () => {
    toast.success("Đang chuyển đến trang nạp tiền...");
    // In a real app, this would navigate to deposit page
  };

  const handleBuyNow = () => {
    toast.success("Đang thêm vào giỏ hàng...");
    // In a real app, this would add to cart
  };

  const handleServiceToggle = (serviceName: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceName)) {
        toast.info(`Đã bỏ chọn ${serviceName}`);
        return prev.filter(s => s !== serviceName);
      } else {
        toast.success(`Đã chọn ${serviceName}`);
        return [...prev, serviceName];
      }
    });
  };

  const handleViewAllNotifications = () => {
    toast.info("Hiển thị tất cả thông báo");
  };

  const handleTransactionFilter = (filter: 'all' | 'deposit' | 'withdraw') => {
    setActiveTab(filter);
    const filterText = filter === 'all' ? 'Tất cả' : filter === 'deposit' ? 'Nạp tiền' : 'Rút tiền';
    toast.info(`Lọc giao dịch: ${filterText}`);
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      toast.info(`Đang tìm kiếm: ${query}`);
    }
  };

  return (
    <div className="w-full h-full" onClick={(e) => {
      const target = e.target as HTMLElement;
      const button = target.closest('[data-name="Button"]');
      const input = target.closest('[data-name="Input"]');
      
      // Handle button clicks
      if (button) {
        const text = button.textContent?.trim();
        
        if (text?.includes('Thêm vào giỏ hàng') || text?.includes('Mua Ngay')) {
          handleBuyNow();
        } else if (text?.includes('Xem tất cả thông báo')) {
          handleViewAllNotifications();
        } else if (button.className.includes('bg-[#fd397a]')) {
          handleDeposit();
        }
        return;
      }

      // Handle service checkboxes/inputs
      if (input) {
        const serviceContainer = input.closest('[data-name*="Group"]');
        if (serviceContainer) {
          const serviceName = serviceContainer.querySelector('[data-name*="Component"]')?.textContent || 'Service';
          handleServiceToggle(serviceName);
        }
      }

      // Handle menu item clicks
      const menuItem = target.closest('[data-name="Menu item"]');
      if (menuItem) {
        const menuText = menuItem.textContent?.trim();
        if (menuText) {
          toast.info(`Điều hướng đến: ${menuText}`);
        }
      }
    }}>
      <Frame2144772184 />
    </div>
  );
}
