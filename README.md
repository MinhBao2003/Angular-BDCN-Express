** muốn chạy đc angular phải cài node js từ trang chủ của node js có thể cài node pb v21.7.3 hoặc mới nhất : 

`
https://nodejs.org/en/download/prebuilt-installer/current
`

cài xong node có thể mở cmd vs quyền administration và cài angular js như hình :

`
npm install -g @angular/cli
`

![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/47eaf9ea-19b1-4e24-a540-079c8741743d)

** do project có 1 số phần sài boostap nên phải cài boostrap : 

`
npm install bootstrap
`

![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/010089d2-739a-47d5-81d7-4de9b0368487)

mở project trong visual code và bấm : 

`
ctrl + shift + `
`

![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/d2a186a1-8dea-4043-9e69-9402ec152d88)

chọn WebBanHang

![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/ccfefe32-0c5a-4ee7-b513-58746dd8af1b)

muốn chạy serve project gõ : 

`
ng serve
`

![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/078e83da-a4d0-4fef-aa3d-7f4a41464323)

chạy dự án thành công coppy phần '`http://localhost:4200/ `' past vào gloogle nhấn enter.

** lưu ý khi chưa chạy project ko dữ liệu api lên thì 1 số dữ liệu sẽ ẩn ko
link git data node Express:

`
`

//đường dẫn src/app/componets/... chứa code html css và jsx của các trang giao diện web và chi tiết sp ,..
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/7a3700a6-5ecb-4d61-9dc6-68edf7b8efb7)

//đường dẫn src/app/server/... chứa code kết api loát dữ vs node(express)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/a81020ad-1fe1-47f3-b749-129a33a0c745)

//đường dẫn src/interface /... chứa code interface
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/42e2d74e-0830-4a51-a96e-3434c807410e)

// +chức năng chính 
//I.giao diện web (trang chủ) http://localhost:4200/
//menu và baner 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/a10c44e9-ada4-4324-a725-35088a1d9d85)
//phần sale 2023
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/6dedf987-2d97-4ee8-a48b-8be9e2594077)
//phần điện thoại
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/df6286ff-444d-4154-a818-19fc1bfe9605)
khi ấn buttom xem tất cả 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/7d845ea1-3eb0-4d61-88ad-9c4654694a92)
giao diện xem tát cả
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/1e851f2e-54a2-4f03-8e2d-6bfb6b849706)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/463906ee-cad5-48d4-ad22-a8d4b8bfb9c9)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/16135a74-63a3-4b4b-bf07-30adc0bd81d0)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/ac190c0f-005f-4669-8f82-a09dbdc2a8fb)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/a987666f-b535-4c0f-8b1a-de64f38736bc)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/5077589b-5b5e-4272-89e6-6ea4061a9945)
khi ấn button chơi game nó sẽ lọc ra các loại máy có só ram 12gb hoặc đt của hẳng asus cái nút dương lượng lớn tương tự
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/63d6d445-b19c-4074-b57e-22253e0bdf3e)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/e8f6f878-babd-428b-be58-d9787b1c694f)
khi chọn ram 12gb nó sẽ lọc máy có 12gb cái bộ nhớ trọng và khích thước màn hình cũng tương tự
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/020039e9-e5e6-462e-bbff-8cea3a50b374)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/c2eaa0a8-ccfc-4099-8edf-d13e38d89f6f)
khi ấn buttom giá cao - thấp
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/60ac75c8-b36b-4443-a943-f6f880fd1973)
nó sẽ lọc theo giá cao thấp sản phẩm bạn đã select khi chọn ram và bộ nhớ trong hoặc khích thước màn hình , và khi bạn không select 3 cái đó nó sẽ lọc tất cả giá sản phảm cao đến thấp (có thể làm mới lại trang khi select ba cái trên hoặc phàn chới game dung lượng và ngược lại ) các còn lại tivi latop ,.. tương tự
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/8dd416bd-9dff-44a1-b6c8-ab842cd5c2b8)
//phần laptop
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/857081bf-8ed3-4404-b380-c1265f525286)
//phần tivi
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/8c8a7a18-323a-4f89-9e5e-5c71c81e40f9)
//phần tai ghe
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/cf4e46d1-3ad1-4e84-b54e-83e9d6a9210f)
//phần đồng hồ 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/777d0725-ad5f-4923-9ec5-53585e0dd12c)
//phần liên hệ
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/674802b2-4a1a-4c18-90d2-2ccff322f174)
//II.phần thắc mắc (liện hệ 2) 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/e7fb865c-d454-4d47-9cc6-565672d670da)
//phần chiêu tiết sản phẩm http://localhost:4200/%C4%90i%E1%BB%87n-tho%E1%BA%A1i-Samsung-Galaxy-A54-5G/1
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/39d80f94-21b6-4954-97b5-a08bc01c4adf)
có thể chọn loại ram 256gb và 128gb và màu sắc
chọn ram 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/8245476a-bcee-4a20-90c6-7a7e782f3a42)
chọn màu
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/70e0d0b3-5133-47fd-9429-232d044d2930)
phần Thông tin sản phẩm,Đặc điêm nổi bật,Thông số kỹ thuật
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/540b09dd-75a4-43c8-81ad-65987c65697a)
phần câu hỏi đặc biệt và đánh giá khi login vào và đánh giá theo sao
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/ed4b926d-513c-4b4a-b28c-2a7bb57f463b)
phần hỏi đáp sp *đang update 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/914121da-e969-42a7-b48e-01d34d57e4e3)
phần liên hệ 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/46f4eddd-3b57-4447-be41-850fc71d7e29)
// khi ấn thêm giỏ hàng 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/0a026b82-a45e-4684-8458-76ba67bfa5e1)
thì ở giỏ hàng menu sẽ hiện số sp đang có
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/8bae3708-01ac-44cc-885d-e93a1b2ae5bd)
//III.giỏ hàng
giao diện giỏ hàng
có thể tăng giả sp và xóa sp giỏ hàng và tính giả số lượng giá sp khi tăng giảm
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/091516a0-d6f7-483b-a0e6-899c006ca5d9)
+tăng sp

![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/80415299-1501-44aa-a141-4bac7fd6c416)

+giảm sp

![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/be56bf52-d2f4-4e8a-9f47-fef84282eaf4)

khi tích và ấn đặt hàng nó sẽ chuyển qua trang đặt hàng

![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/11562dad-345d-42d3-b1d7-faf96cb98ae1)
//IV.trang đặt hàng http://localhost:4200/dondathang
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/a0d09713-3f2c-428e-9f26-26ee083f05c9)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/5423debe-5469-46fb-8740-9ebbf511bdfd)
khi ấn đặt hàng 
dữ liệu sẽ được lưu lại vào check hàng và tự động chuyển sang trang http://localhost:4200/datthanhcong
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/8c42d792-57dc-4b14-b8cd-6fd3b2e13f0c)
// datthhanhcong
giao diện 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/5a9cd884-6cb7-4a40-a0c9-e1b5e50f9c87)
chức nag hủy hàng *đang update lổi khi hủy khi ko 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/53743c18-bd71-435c-a638-56338aed3100)
khi ấn đã nhận hàng thì thông đơn hàng sẽ xóa và lưu qua đã nhận hàng 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/1d68c8fd-9f49-4013-b17a-a95edd99fc9)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/476cd71b-d8e6-4caa-903d-473c6dd9c6a9)
lưu dữ liệu 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/7eac1a18-fa75-4312-b8da-abae87e0c5b6)
giao diện dã nhận hàng
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/a1d87db0-eae0-4198-ac05-aac13dbc2385)
giao diện dơn huy khi huy thành công
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/ae41cef0-3abd-4a50-af6a-2f92a30d9924)
//V.trang đăng nhập
giao diện http://localhost:4200/dangnhap
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/f39ec3a0-c309-4500-b137-2a401bf5ba2e)
khi không có tk có thể đk http://localhost:4200/dangky
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/f6bb8982-520d-4e2d-aa0d-0a83333a0091)
khi ấn đk dư liệu lưu vào api và tự đông chuyển lại trang đăng nhập 
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/7ed99ede-6678-4e87-ba1a-9f5e7cadb439)

khi có tk có thể đăng nhập
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/d2487478-c73c-4e2c-80cc-d89234aefeac)

khi ấn đăng nhập ở menu phần login sẽ hiện tên khách hàng
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/26a5d5aa-27c9-4ca2-9105-893c575e02a1)

//VI.Trang vitri
giao diện http://localhost:4200/vitri
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/de6973c4-5466-4842-aec6-21d3a341d7e3)
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/3d6c2352-c11c-4332-8b1f-f5cf6b5b1d03)
khi ấn đặt lịch hẹn vs của hàng nó sẽ lưu vào data
![image](https://github.com/MinhBao2003/Angular-BDCN-Express/assets/146474537/154dfe5d-49cb-4939-8d18-3466f2382d9b)

*phần đơn hàng đã review trong cái giỏ hàng hủy , nhận , giỏ hàng 
* phần đặt hàng gióng chức năng giỏ hàng nên làm cái 





