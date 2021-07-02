import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Home = props => {
  const navigation = props.navigation;
  return (
    <ScrollView>
      {/* 0702 로고작업 */}
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#5f0080',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../images/logo.png')}
          style={{resizeMode: 'contain', width: 60, height: 40}}
        />

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            right: 16,
            alignItems: 'center',
          }}>
          <Icon
            style={{fontSize: 22, color: 'white', marginRight: 16}}
            name="location-outline"
            type="Ionicons"
          />
          <Image
            source={require('../images/cart.png')}
            style={{resizeMode: 'contain', width: 20, height: 20}}
          />
        </View>
      </View>

      {/* 0702 메뉴 텍스트 작업 */}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 8,
        }}>
        <Text
          style={[
            styles.menutext,
            {
              color: '#5f0080',
              fontWeight: 'bold',
              borderBottomWidth: 2,
              borderBottomColor: '#5f0080',
              paddingLeft: 4,
              paddingRight: 4,
            },
          ]}>
          컬리추천
        </Text>
        <Text style={styles.menutext}>신상품</Text>
        <Text style={styles.menutext}>베스트</Text>
        <Text style={styles.menutext}>알뜰쇼핑</Text>
        <Text style={styles.menutext}>특가/혜택</Text>
      </View>

      {/* 0702 배너 이미지 */}
      <View>
        <Image
          source={require('../images/event1.jpg')}
          style={[styles.coverImage, {width: '100%', height: 373}]}
        />
      </View>

      {/* 0702 상품 추천1 */}
      <View style={{marginTop: 16, marginLeft: 10}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>이 상품 어때요?</Text>

        <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
          <View style={{width: '43%'}}>
            <Image
              source={require('../images/item1.jpg')}
              style={[styles.coverImage, {width: '100%', height: 230}]}
            />
            <Text>[KF365] 1+등급 무항생제 특란20구</Text>
            <Text>7,200원</Text>
          </View>

          <View style={[styles.Itemview]}>
            <Image
              source={require('../images/item2.jpg')}
              style={[styles.coverImage, {width: '100%', height: 230}]}
            />
            <Text>[KF365] 1+등급 무항생제 특란20구</Text>
            <Text>7,200원</Text>
          </View>

          <View style={[styles.Itemview]}>
            <Image
              source={require('../images/item3.jpg')}
              style={[styles.coverImage, {width: '100%', height: 230}]}
            />
            <Text>[KF365] 1+등급 무항생제 특란20구</Text>
            <Text>7,200원</Text>
          </View>
        </View>

        {/* 0702 일일특가 */}
        <View style={{marginTop: 40}}>
          <Text style={{fontWeight: 'bold', color: '#5f0080', fontSize: 16}}>
            일일특가
          </Text>
          <Text style={{color: 'gray'}}>24시간 한정 특가</Text>

          <View style={{marginTop: 16}}>
            <Image
              source={require('../images/sale.jpg')}
              style={[
                styles.coverImage,
                {
                  width: Dimensions.get('window').width - 20,
                  height: 195,
                },
              ]}
            />
            <View
              style={{
                position: 'absolute',
                width: 60,
                height: 30,
                backgroundColor: '#C553D4',
                color: 'white',
                fontSize: 12,
                opacity: 0.7,
              }}></View>

            <Text
              style={{
                position: 'absolute',
                color: 'white',
                fontSize: 12,
                top: 6,
                left: 7,
              }}>
              일일특가
            </Text>
            <View
              style={{
                position: 'absolute',
                width: Dimensions.get('window').width - 20,
                height: 40,
                backgroundColor: '#5f0080',
                opacity: 0.6,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}></View>
            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: Dimensions.get('window').width - 20,
                height: 40,
                bottom: 0,
              }}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                22:13:06
              </Text>
              <Text style={{fontSize: 12, color: 'white'}}> 남음</Text>
            </View>
          </View>

          <Text style={{marginTop: 4}}>[델리치오] 와규 함박스테이크</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'orange'}}>50% </Text>
            <Text>6,500원</Text>
            <Text>13,000원</Text>
          </View>
        </View>
      </View>

      {/* 0702 특가/혜택 > */}
      <View
        style={{
          backgroundColor: '#E1EAFA',
          width: '100%',
          height: 500,
          marginTop: 28,
        }}>
        <View style={{marginLeft: 10, marginTop: 28}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            특가/혜택 <Text style={{color: 'grey', fontSize: 18}}>></Text>
          </Text>

          <View
            style={{
              marginTop: 16,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../images/saleitem1.jpg')}
              style={[styles.coverImage, {width: 120, height: 120}]}
            />
            <View style={{flexDirection: 'column', marginLeft: 16}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 8}}>
                CJ 최대 10% 할인
              </Text>
              <Text style={{color: 'grey'}}>
                비비고 백설 고메 인기상품 모음
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 16,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../images/saleitem2.jpg')}
              style={[styles.coverImage, {width: 120, height: 120}]}
            />
            <View style={{flexDirection: 'column', marginLeft: 16}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 8}}>
                CJ 최대 10% 할인
              </Text>
              <Text style={{color: 'grey'}}>
                비비고 백설 고메 인기상품 모음
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 16,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../images/saleitem3.jpg')}
              style={[styles.coverImage, {width: 120, height: 120}]}
            />
            <View style={{flexDirection: 'column', marginLeft: 16}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 8}}>
                CJ 최대 10% 할인
              </Text>
              <Text style={{color: 'grey'}}>
                비비고 백설 고메 인기상품 모음
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* 0702 놓치면 후회할 가격 */}
      <View style={{marginLeft: 10, marginTop: 28}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          놓치면 후회할 가격
        </Text>

        <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
          <View style={{width: '43%'}}>
            <Image
              source={require('../images/item4.jpg')}
              style={[styles.coverImage, {width: '100%', height: 255}]}
            />
            <Text>[KF365] 1+등급 무항생제 특란20구</Text>
            <Text>7,200원</Text>
          </View>

          <View style={[styles.Itemview]}>
            <Image
              source={require('../images/item5.jpg')}
              style={{resizeMode: 'cover', width: '100%', height: 255}}
            />
            <Text>[KF365] 1+등급 무항생제 특란20구</Text>
            <Text>7,200원</Text>
          </View>

          <View style={[styles.Itemview]}>
            <Image
              source={require('../images/item6.jpg')}
              style={[styles.coverImage, {width: '100%', height: 255}]}
            />
            <Text>[KF365] 1+등급 무항생제 특란20구</Text>
            <Text>7,200원</Text>
          </View>
        </View>
      </View>

      {/* 0702 배너 */}
      <Image
        source={require('../images/banner1.jpg')}
        style={[
          styles.coverImage,
          {width: '100%', height: 80, marginTop: 40, marginBottom: 28},
        ]}
      />

      {/* 0702 MD의 추천 */}
      <View style={{marginLeft: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>MD의 추천</Text>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-start',
            marginBottom: 20,
          }}>
          <Text style={[styles.menutext, {color: '#5f0080'}]}>채소</Text>
          <Text style={[styles.menutext, {marginLeft: 30}]}>과일 견과 쌀</Text>
          <Text style={[styles.menutext, {marginLeft: 30}]}>
            수산 해산 건어물
          </Text>
          <Text style={[styles.menutext, {marginLeft: 30}]}>정육 계란</Text>
          <Text style={[styles.menutext, {marginLeft: 30}]}>국 밥</Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginRight: 10,
            }}>
            <View style={{width: '30%'}}>
              <Image
                source={require('../images/item1.jpg')}
                style={[styles.coverImage, {width: '100%', height: 160}]}
              />
              <Text>나주 영산포 꿀 밤고구마 3kg</Text>
              <Text>
                20%<Text>15,900원</Text>
              </Text>
              <Text style={{fontSize: 10}}>19,900원</Text>
            </View>

            <View style={{width: '30%'}}>
              <Image
                source={require('../images/item2.jpg')}
                style={{width: '100%', height: 160, resizeMode: 'cover'}}
              />
              <Text>[KF365] 흙대파 1단</Text>
              <Text>
                46%<Text>1,990원</Text>
              </Text>
              <Text style={{fontSize: 10}}>3,690원</Text>
            </View>

            <View style={{width: '30%'}}>
              <Image
                source={require('../images/item3.jpg')}
                style={[styles.coverImage, {width: '100%', height: 160}]}
              />
              <Text>초당 옥수수 5입</Text>
              <Text>9,400원</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginRight: 10,
              marginTop: 16,
            }}>
            <View style={{width: '30%'}}>
              <Image
                source={require('../images/item4.jpg')}
                style={[styles.coverImage, {width: '100%', height: 160}]}
              />
              <Text>나주 영산포 꿀 밤고구마 3kg</Text>
              <Text>
                20%<Text>15,900원</Text>
              </Text>
              <Text style={{fontSize: 10}}>19,900원</Text>
            </View>

            <View style={{width: '30%'}}>
              <Image
                source={require('../images/item5.jpg')}
                style={[styles.coverImage, {width: '100%', height: 160}]}
              />
              <Text>나주 영산포 꿀 밤고구마 3kg</Text>
              <Text>
                20%<Text>15,900원</Text>
              </Text>
              <Text style={{fontSize: 10}}>19,900원</Text>
            </View>

            <View style={{width: '30%'}}>
              <Image
                source={require('../images/item6.jpg')}
                style={[styles.coverImage, {width: '100%', height: 160}]}
              />
              <Text>나주 영산포 꿀 밤고구마 3kg</Text>
              <Text>
                20%<Text>15,900원</Text>
              </Text>
              <Text style={{fontSize: 10}}>19,900원</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            marginTop: 16,
            width: '100%',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E1EAFA',
          }}>
          <Text>채소 전체 보기</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 40,
          width: '100%',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAC7D0',
        }}>
        <Text style={{color: '#CF645F', fontSize: 16, fontWeight: 'bold'}}>
          장바구니 자랑하면 5천원의 행운이 매일!
        </Text>
        <Text style={{color: '#CF645F'}}>매일 20분께 드리는 적립금 혜택!</Text>
      </TouchableOpacity>

      {/* 0702 지금 가장 핫한 상품 */}
      <View style={{marginLeft: 10, marginTop: 28}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          지금 가장 핫한 상품
        </Text>

        <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
          <View style={{width: '43%'}}>
            <Image
              source={require('../images/item5.jpg')}
              style={[styles.coverImage, {width: '100%', height: 255}]}
            />
            <Text>[KF365] 1+등급 무항생제 특란20구</Text>
            <Text>7,200원</Text>
          </View>

          <View style={[styles.Itemview]}>
            <Image
              source={require('../images/item1.jpg')}
              style={{resizeMode: 'cover', width: '100%', height: 255}}
            />
            <Text>[KF365] 1+등급 무항생제 특란20구</Text>
            <Text>7,200원</Text>
          </View>

          <View style={[styles.Itemview]}>
            <Image
              source={require('../images/item4.jpg')}
              style={[styles.coverImage, {width: '100%', height: 255}]}
            />
            <Text>[KF365] 1+등급 무항생제 특란20구</Text>
            <Text>7,200원</Text>
          </View>
        </View>
      </View>

      {/* 문 앞까지 신선하게 배너 */}
      <Image
        source={require('../images/banner3.jpg')}
        style={[styles.coverImage, {width: '100%', height: 100, marginTop: 40}]}
      />
      <View
        style={{
          backgroundColor: '#E1EAFA',
          width: '100%',
          height: 360,
        }}>
        <View
          style={{
            marginTop: 28,
            marginLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Text style={[styles.bottomText]}>컬리소개</Text>
          <Text style={[styles.bottomText, {marginLeft: 16}]}>이용약관</Text>
          <Text style={[styles.bottomText, {marginLeft: 16}]}>
            개인정보처리방침
          </Text>
        </View>

        <View style={{marginTop: 28, marginLeft: 10}}>
          <Text style={[styles.bottomText]}>
            주식회사 컬리 | 대표자: 김슬아
          </Text>
          <Text style={[styles.bottomText]}>개인정보보호책임자: 이원준</Text>
          <Text style={[styles.bottomText]}>
            사업자등록번호: 261-81-2356{' '}
            <Text style={[styles.bottomText, {color: '#5f0080'}]}>
              사업자 정보확인
            </Text>
          </Text>
          <Text style={[styles.bottomText]}>
            통신판매업: 제 2018-서울강남-01646 호
          </Text>
          <Text style={[styles.bottomText]}>
            주소: 서울특별시 강남구 테헤란로 133, 18층(역삼동)
          </Text>
        </View>

        <View style={{marginTop: 28, marginLeft: 10}}>
          <Text style={[styles.bottomText]}>
            입점문의:{' '}
            <Text style={[styles.bottomText, {color: '#5f0080'}]}>
              입점문의하기
            </Text>
          </Text>
          <Text style={[styles.bottomText]}>
            제휴문의:{' '}
            <Text style={[styles.bottomText, {color: '#5f0080'}]}>
              business@kurlycorp.com
            </Text>
          </Text>
          <Text style={[styles.bottomText]}>
            팩스: 070-7500-6098 | 이메일{' '}
            <Text style={[styles.bottomText, {color: '#5f0080'}]}>
              help@kurlycorp.com
            </Text>
          </Text>
          <Text style={[styles.bottomText]}>
            고객행복센터:{' '}
            <Text style={[styles.bottomText, {color: '#5f0080'}]}>
              1644-1107
            </Text>
          </Text>
        </View>

        <View style={{marginTop: 28, marginLeft: 10}}>
          <Text style={[styles.bottomText]}>
            카카오톡{' '}
            <Text style={[styles.bottomText, {color: '#5f0080'}]}>
              @마켓컬리
            </Text>
            <Text style={[styles.bottomText]}>
              친구 추가하고 소식과 혜택을 받아보세요
            </Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 12}}>
          <Image
            source={require('../images/snsLogo1.png')}
            style={[styles.coverImage, {width: 25, height: 25, marginLeft: 8}]}
          />
          <Image
            source={require('../images/snsLogo2.png')}
            style={[styles.coverImage, {width: 25, height: 25, marginLeft: 8}]}
          />
          <Image
            source={require('../images/snsLogo3.png')}
            style={[styles.coverImage, {width: 25, height: 25, marginLeft: 8}]}
          />
          <Image
            source={require('../images/snsLogo4.png')}
            style={[styles.coverImage, {width: 25, height: 25, marginLeft: 8}]}
          />
          <Image
            source={require('../images/snsLogo5.png')}
            style={[styles.coverImage, {width: 25, height: 25, marginLeft: 8}]}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menutext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    lineHeight: 30,
  },
  coverImage: {
    resizeMode: 'cover',
  },
  Itemview: {
    width: '43%',
    marginLeft: 8,
  },
  bottomText: {
    fontSize: 12,
    color: '#ABABAB',
  },
});

/* api= 로케이션, 로그인, 회원가입
탭 활용 = 메인 이벤트 이미지
플랫리스트 = 상품들
모먼트 = 남은 시간 (특가)
네비게이션 = 각 페이지 + SNS */
