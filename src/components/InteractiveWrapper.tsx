import { ReactNode, useState, useEffect } from "react";
import { toast } from "sonner@2.0.3";

interface InteractiveWrapperProps {
  children: ReactNode;
  onNavigate?: (path: string) => void;
}

export function InteractiveWrapper({ children, onNavigate }: InteractiveWrapperProps) {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Add event listeners to make elements interactive
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Handle buttons
      const button = target.closest('[data-name="Button"]');
      if (button) {
        e.preventDefault();
        const buttonText = button.textContent?.trim();
        
        if (buttonText?.includes('Thêm vào giỏ hàng')) {
          toast.success("Đã thêm vào giỏ hàng!");
          return;
        }
        
        if (buttonText?.includes('Mua Ngay')) {
          toast.success("Đang xử lý đơn hàng...");
          return;
        }
        
        if (buttonText?.includes('Xem tất cả thông báo')) {
          toast.info("Hiển thị tất cả thông báo");
          return;
        }
        
        // Generic button click
        if (buttonText) {
          toast.info(`Đã nhấn: ${buttonText}`);
        }
        return;
      }

      // Handle menu items
      const menuItem = target.closest('[data-name="Menu item"]');
      if (menuItem) {
        e.preventDefault();
        const menuText = menuItem.textContent?.trim();
        
        if (menuText?.includes('Trang chủ')) {
          toast.info("📊 Đã chuyển đến Trang chủ");
          onNavigate?.('/');
        } else if (menuText?.includes('Cập Nhật Thông Tin')) {
          toast.info("👤 Đã chuyển đến Cập nhật thông tin");
          onNavigate?.('/profile');
        } else if (menuText?.includes('Nạp Tiền')) {
          toast.info("💰 Đã chuyển đến Nạp tiền");
          onNavigate?.('/deposit');
        } else if (menuText?.includes('Rút Tiền')) {
          toast.info("💸 Đã chuyển đến Rút tiền");
          onNavigate?.('/withdraw');
        } else if (menuText?.includes('Lịch Sử Hoạt Động')) {
          toast.info("📜 Đã chuyển đến Lịch sử hoạt động");
          onNavigate?.('/history');
        } else if (menuText) {
          toast.info(`Điều hướng: ${menuText}`);
        }
        return;
      }

      // Handle service checkboxes/inputs
      const inputElement = target.closest('[data-name="Input"]');
      if (inputElement) {
        e.preventDefault();
        
        // Find parent container to get service name
        const serviceContainer = inputElement.parentElement;
        const serviceText = serviceContainer?.textContent?.trim();
        
        if (serviceText) {
          const serviceName = serviceText.split('\n')[0] || serviceText;
          
          setSelectedServices(prev => {
            const newSet = new Set(prev);
            if (newSet.has(serviceName)) {
              newSet.delete(serviceName);
              toast.info(`Đã bỏ chọn ${serviceName}`);
            } else {
              newSet.add(serviceName);
              toast.success(`✓ Đã chọn ${serviceName}`);
            }
            return newSet;
          });
          
          // Toggle visual state
          const checkbox = inputElement as HTMLElement;
          const hasCheckmark = checkbox.querySelector('[stroke="var(--stroke-0, #3167F3)"]');
          
          if (hasCheckmark) {
            checkbox.style.backgroundColor = 'white';
            hasCheckmark.remove();
          } else {
            checkbox.style.backgroundColor = '#3167F3';
            // Add checkmark SVG
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 14 14');
            svg.setAttribute('fill', 'none');
            svg.style.position = 'absolute';
            svg.style.width = '100%';
            svg.style.height = '100%';
            svg.style.left = '0';
            svg.style.top = '0';
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M2 7L5.5 10.5L12 4');
            path.setAttribute('stroke', 'white');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            
            svg.appendChild(path);
            checkbox.style.position = 'relative';
            checkbox.appendChild(svg);
          }
        }
        return;
      }

      // Handle service card clicks
      const serviceCard = target.closest('[data-name*="Component"]');
      if (serviceCard && serviceCard.getAttribute('data-name')?.includes('Component')) {
        e.preventDefault();
        const serviceText = serviceCard.textContent?.trim();
        if (serviceText) {
          const lines = serviceText.split('\n').filter(line => line.trim());
          const serviceName = lines[0] || serviceText;
          toast.info(`Xem dịch vụ: ${serviceName}`);
        }
        return;
      }

      // Handle transaction items
      const transactionItem = target.closest('[data-name="Transaction"]');
      if (transactionItem) {
        e.preventDefault();
        toast.info("Xem chi tiết giao dịch");
        return;
      }

      // Handle search icon clicks
      const searchIcon = target.closest('[data-name*="Search"]') || 
                         target.closest('[data-name*="search"]') ||
                         target.closest('[data-name*="Magnifer"]');
      if (searchIcon) {
        e.preventDefault();
        toast.info("🔍 Tìm kiếm...");
        return;
      }

      // Handle notification bell clicks
      const notificationIcon = target.closest('[data-name*="Bell"]') || 
                               target.closest('[data-name*="Notification"]');
      if (notificationIcon) {
        e.preventDefault();
        toast.info("🔔 Hiển thị thông báo");
        return;
      }
    };

    // Add input event listeners for text inputs
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.tagName === 'INPUT' && target.type === 'text') {
        setSearchQuery(target.value);
      }
    };

    // Add form submit handlers
    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      toast.success("Form đã được gửi!");
    };

    document.addEventListener('click', handleGlobalClick);
    document.addEventListener('input', handleInput);
    document.addEventListener('submit', handleSubmit);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('input', handleInput);
      document.removeEventListener('submit', handleSubmit);
    };
  }, [onNavigate]);

  return <div className="w-full h-full">{children}</div>;
}
