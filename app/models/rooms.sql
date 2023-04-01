CREATE TABLE IF NOT EXISTS `rooms` (
  room_id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  room_type varchar(255) NOT NULL,
  s_occupancy int(11) NOT NULL,
  m_occupancy int(11) NOT NULL,
  basic_price float(20) NOT NULL,
  extra_bed_rate float(20) NOT NULL,
  created_on DATETIME,
  is_Active BIT(1) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;