use cats;
--  create table `member`(
-- 	`member_num` int NOT NULL AUTO_INCREMENT,
-- 	`member_name` varchar(20),
--     `member_age` int,
--     `member_tel` varchar(30),
--     `member_address` varchar(150),
--     PRIMARY KEY (`member_num`)
--  );
--  

 drop table cat;
 drop table address;
 drop table charc;
 create table `cat`(
	`cat_num` int NOT NULL AUTO_INCREMENT,
	`cat_name` varchar(30) NOT NULL,
	`cat_age` int NOT NULL,
    `kind` varchar(30) NOT NULL,
    `description` varchar(200) NOT NULL,
    `create_date` TIMESTAMP DEFAULT NOW(),
	`profile` varchar(60) NOT NULL,
    `address` varchar(200) NOT NULL,
	PRIMARY KEY (`cat_num`) 
 );

  create table `address`(
	`cat_num` int NOT NULL,
    `address_num` int NOT NULL AUTO_INCREMENT,
	`lat` float,
    `lng` float,
    PRIMARY KEY (`address_num`) ,
    FOREIGN KEY (`cat_num`) REFERENCES `cat` (`cat_num`)
 );
 
create table `charc`(
	`cat_num` int NOT NULL,
    `charc_num` int NOT NULL auto_increment,
    `cowardice` int NOT NULL,
    `extrovert` int NOT NULL,
    `aggressive` int NOT NULL,
    `whim` int NOT NULL,
    `friendly` int NOT NULL,
    PRIMARY KEY (`charc_num`) ,
    FOREIGN KEY (`cat_num`) REFERENCES `cat` (`cat_num`)
);


insert into cat (cat_name, cat_age, kind, description, profile, address)
 values('페르시',2, '페르시안', 'cat00.png', '페르시안 고양이에요!', '서울특별시 동작구 사당로 18-1' );
 
 insert into cat (cat_name, cat_age,  kind, profile, description, address)
 values('메인쿠운',3, '메인쿤', 'cat01.jpg', '메인쿤 고양이에요!', '서울특별시 서대문구 이화여대길 7, 1층(대현동)' );
 
 insert into cat (cat_name,  cat_age, kind, profile, description, address)
 values('뱅골라데시',3, '뱅골', 'cat02.jpg', '뱅골 고양이에요!', '서울특별시 노원구 한글비석로 396, 108동 1층 18호(상계동)' );
 
 insert into cat (cat_name, cat_age,  kind, profile, description, address)
 values('브리트니',1, '브리티시 쇼트헤어', 'cat03.jpg', '브리티시 숏헤어 고양이에요!', '대전 유성구 테크노3로 77, A동 1층 105호(관평동)' );
 
 insert into cat (cat_name, cat_age,  kind, profile, description, address)
 values('시안',5, '시암', 'cat04.jpg', '시암 고양이에요!', '대전광역시 유성구 관평2로 22, 1층 102호(관평동)' );
 
 insert into cat (cat_name, cat_age,  kind, profile, description, address)
 values('파라오',4, '스핑크스', 'cat05.jpg', '스핑크스 고양이에요!','대전광역시 유성구 궁동 409-8' );
 
 insert into cat (cat_name, cat_age,  kind, profile, description, address)
 values('짱돌',4, '렉돌', 'cat06.jpg', '렉돌 뚱냥이에요!', '대전광역시 서구 둔산로 8(둔산동)' );
 
 insert into cat (cat_name, cat_age,  kind, profile, description, address)
 values('사이타마',3, '먼치킨', 'cat07.jpg', '세계관 최강 먼치킨 고양이에요!','대구광역시 중구 동성로 2(동성로 3가)' );
 
 insert into cat (cat_name, cat_age,  kind, profile, description, address)
 values('갤럭시',7, '스코티시 폴드', 'cat08.jpg', '스코티시 폴드 고양이에요!', '대구광역시 달서구 계대동문로 5(신당동)' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('하바나',2, '사바나', 'cat09.jpg', '사바나 고양이에요!', '대구광역시 달서구 상인서로 85(상인동)' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('허스키',2, '시베리안', 'cat10.jpg', '시베리안 고양이에요!', '대구광역시 북구 대학로 23길 19(산격동)' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('나무',3, '노르웨이 숲 고양이', 'cat11.jpg', '노르웨이 숲 고양이에요!', '강원도 원주시 장미공원길 75-10, 1층 (단계동)' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('블루',6, '러시안 블루', 'cat12.png', '러시안 블루 고양이에요!', '제주특별자치도 제주시 제주대학로 105-1(아라이동)' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('숏',2, '아메리칸 쇼트헤어', 'cat13.jpg', '짧은 머리 고양이에요!', '제주특별자치도 서귀포시 동홍서로 47' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('아이루',1, '버만', 'cat14.jpg', '젤 좋아하는 버만 고양이에요!', '울산광역시 남구 수암로 198, 1층(야음동)' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('모아',1, '터키시 앙고라', 'cat15.jpg', '싱가푸라 고양이에요!', '울산광역시 북구 박상진2로 100 (화봉동) 1층 104호 (오신타워)' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('두번푸라',0, '싱가푸라', 'cat16.jpg', '싱가푸라 고양이에요!', '울산광역시 울주군 범서읍 천상중앙길 100-1' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('조이스틱',2, '엑조틱 쇼트헤어', 'cat17.jpg', '엑조틱 쇼트헤어 고양이에요!', '부산광역시 해운대구 중동1로 33-1 (중동)' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('히말라야',2, '히말라얀', 'cat18.jpg', '히말라얀 고양이에요!', '부산광역시 해운대구 센텀동로 25 (우동, 대우월드마크센텀아파트)' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('사르트뢰',4, '사르트뢰', 'cat19.jpg', '사르트뢰 고양이에요!', '충청북도 옥천군 옥천읍 금장로 42-1' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('니안',3, '아비시니안', 'cat20.jpg', '아비시니안 고양이에요!', '경기도 평택시 신촌2로 21 (칠원동) 맘스스퀘어 C동 109호' );
 
 insert into cat (cat_name, cat_age, kind, profile, description, address)
 values('페르시',3, '페르시안', 'cat00.png', '페르시안 고양이에요!!!', '경기도 부천시 석천로 38번길 5, 1층' );
 
 select * from cat;
 
 
 insert into address (cat_num, lat, lng) values(1, 37.495176, 126.956504 );
 insert into address (cat_num, lat, lng) values(2, 37.557240, 126.945588 );
 insert into address (cat_num, lat, lng) values(3, 37.661268, 127.072696 );
 insert into address (cat_num, lat, lng) values(4, 36.428565, 127.390314 );
 insert into address (cat_num, lat, lng) values(5, 36.424642, 127.389820 );
 insert into address (cat_num, lat, lng) values(6, 36.362044, 127.350307 );
 insert into address (cat_num, lat, lng) values(7, 36.352278, 127.374911 );
 insert into address (cat_num, lat, lng) values(8, 35.867194, 128.594013 );
 insert into address (cat_num, lat, lng) values(9, 35.855829, 128.492998 );
 insert into address (cat_num, lat, lng) values(10, 35.817365, 128.540326 );
 insert into address (cat_num, lat, lng) values(11, 35.894104, 128.609965 );
 insert into address (cat_num, lat, lng) values(12, 37.345335, 127.929073 );
 insert into address (cat_num, lat, lng) values(13, 33.460315, 126.561230 );
 insert into address (cat_num, lat, lng) values(14, 33.253190, 126.569555 );
 insert into address (cat_num, lat, lng) values(15, 35.526490, 129.328343 );
 insert into address (cat_num, lat, lng) values(16, 35.600665, 129.368090 );
 insert into address (cat_num, lat, lng) values(17, 35.562593, 129.225439 );
 insert into address (cat_num, lat, lng) values(18, 35.162541, 129.163266 );
 insert into address (cat_num, lat, lng) values(19, 35.171306, 129.131169 );
 insert into address (cat_num, lat, lng) values(20, 36.301149, 127.568628 );
 insert into address (cat_num, lat, lng) values(21, 37.031734, 127.102688 );
 insert into address (cat_num, lat, lng) values(22, 37.490812, 126.760546 );
 
 select * from address;

insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(1, 3,3,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(2, 2,3,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(3, 3,3,1,1,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(4, 3,3,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(5, 3,0,1,4,2);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(6, 3,3,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(7, 2,3,1,4,4);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(8, 3,3,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(9, 3,3,4,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(10, 5,3,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(11, 3,1,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(12, 3,3,1,2,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(13, 3,3,1,4,2);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(14, 2,2,1,4,2);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(15, 1,4,1,4,1);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(16, 1,3,1,4,1);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(17, 3,2,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(18, 5,3,1,4,2);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(19, 3,2,1,4,4);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(20, 4,3,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(21, 3,4,1,4,5);
insert into charc(cat_num, cowardice, extrovert, aggressive, whim, friendly) values(21, 5,3,1,4,5);

select * from charc;
