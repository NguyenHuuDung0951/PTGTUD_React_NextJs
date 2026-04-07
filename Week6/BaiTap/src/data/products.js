export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S24',
    price: 21990000,
    description: 'Man hinh AMOLED 120Hz, camera AI, pin ben bi cho nhu cau ca ngay.',
    stock: 12,
  },
  {
    id: 2,
    name: 'iPhone 15',
    price: 22990000,
    description: 'Chip A16 manh me, quay video on dinh, trai nghiem iOS muot ma.',
    stock: 8,
  },
  {
    id: 3,
    name: 'Nokia G42',
    price: 6490000,
    description: 'Thiet ke chac chan, pin tot, phu hop cho nhu cau su dung co ban.',
    stock: 20,
  },
  {
    id: 4,
    name: 'Xiaomi Redmi Note 14',
    price: 7990000,
    description: 'Cau hinh can bang, man hinh lon, hieu nang on cho hoc tap va giai tri.',
    stock: 16,
  },
]

export function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(value)
}