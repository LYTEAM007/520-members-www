<template>
  <div class="index">
    <!-- 主页面 -->
    <div class="container">
      <div class="main">
        <div class="activeContent">
          <!---->
          <div class="activeDetail">
            <el-row type="flex" class="activeDetailItem" justify="space-around">
              <el-col :span="8">
                <div class="gridContentBorder item">
                  <div>【活动时间】</div>
                  <div class="desc">2023年5月20日-2023年5月27日</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="gridContentBorder item">
                  <div>【活动对象】</div>
                  <div class="desc">全体ManBetX万博会员</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="gridContentBorder item gridContentBorderLast">
                  <div>【活动平台】</div>
                  <div class="desc platform">
                    全平台

                    <span
                      >（不含彩票、捕鱼、万博体育-百家乐、亚洲体育平台）
                    </span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="activeTitle">
          <!-- <img src="../" alt="" class="bgBanner" /> -->
          <div class="bgText">
            <div class="activity-desc">活动内容</div>
            <div>520万博会员日运动大会，体育健将敢闯敢拼，彩金</div>
            <div>积分双倍惊喜，积分累计幸运抽奖，最高累计可获300积分</div>
          </div>
        </div>
        <div class="activeTheme">
          <div @click="changaTabs(1, 'cc')">
            <img class="activeThemeIcon" src="../assets/image/pb.png" alt="" />
            <img
              v-show="activeIndex == 1"
              class="activeThemeIcon"
              src="../assets/image/pb-active.png"
              alt=""
            />
            <div
              :class="{
                activeThemeTitle: activeIndex != 1,
                activeThemeTitleActive: activeIndex == 1,
              }"
            >
              极限奔跑吧
            </div>
          </div>
          <div @click="changaTabs(2, 'tl')">
            <img class="activeThemeIcon" src="../assets/image/lq.png" alt="" />
            <img
              class="activeThemeIcon"
              v-show="activeIndex == 2"
              src="../assets/image/lq-active.png"
              alt=""
            />
            <div
              :class="{
                activeThemeTitle: activeIndex != 2,
                activeThemeTitleActive: activeIndex == 2,
              }"
            >
              竞技篮球火
            </div>
          </div>
          <div @click="changaTabs(3, 'bh')">
            <img class="activeThemeIcon" src="../assets/image/bh.png" alt="" />
            <img
              class="activeThemeIcon"
              v-show="activeIndex == 3"
              src="../assets/image/bh-active.png"
              alt=""
            />
            <div
              :class="{
                activeThemeTitle: activeIndex != 3,
                activeThemeTitleActive: activeIndex == 3,
              }"
            >
              力拔迎胜利
            </div>
          </div>
          <div @click="changaTabs(4, 'cj')">
            <img class="activeThemeIcon" src="../assets/image/pw.png" alt="" />
            <img
              class="activeThemeIcon"
              v-show="activeIndex == 4"
              src="../assets/image/pw-active.png"
              alt=""
            />
            <div
              :class="{
                activeThemeTitle: activeIndex != 4,
                activeThemeTitleActive: activeIndex == 4,
              }"
            >
              排位赛好礼
            </div>
          </div>
        </div>
        <div class="activeThemeContent">
          <!-- 活动背景图 -->
          <img
            class="activeThemeContentIcon"
            v-show="activeIndex == 1"
            src="../assets/image/bp-bg.png"
            alt=""
          />
          <img
            class="activeThemeContentIcon"
            v-show="activeIndex == 2"
            src="../assets/image/lq-bg.png"
            alt=""
          />
          <img
            class="activeThemeContentIcon"
            v-show="activeIndex == 3"
            src="../assets/image/bh-bg.png"
            alt=""
          />
          <img
            class="activeThemeContentIcon"
            v-show="activeIndex == 4"
            src="../assets/image/pw-bg.png"
            alt=""
          />
          <!--极限奔跑吧 -->
          <div class="activeThemeContentItem" v-show="activeIndex == 1">
            <div>
              会员于5月20日至5月25日,每累计有效存款1,520元,即可在赛跑活动中获得一次冲刺机会,每次冲刺即可获得一份随机彩金及1点积分。
            </div>
            <div class="activeThemeContentDesc">
              每项赛事最高可获得100点积分,且积分需在5月26日
              23:59:59之前获取,逾期视为放弃。活动中所获随机彩金可持续累计。
            </div>
            <el-row
              type="flex"
              justify="space-around"
              align="center"
              class="activeSection"
            >
              <el-col :span="12" class="textCenter">
                <img
                  src="../assets/image/people-pb.png"
                  alt=""
                  class="activeSectionIcon"
                />
              </el-col>
              <el-col :span="12" class="sectionRight">
                <el-col :span="24">
                  <el-row
                    type="flex"
                    justify="space-between"
                    class="marginBottom30"
                  >
                    <el-col :span="14" class="btn noCursor">
                      已获得彩金：{{
                        formatFigure(detail.act1_reword_prize)
                      }}&nbsp;元
                    </el-col>
                    <el-col :span="8" class="textRight">
                      <div class="btnGray" @click="showRewardRecord('1')">
                        中奖记录
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="progress">
                  <el-col :span="24">
                    <el-row type="flex" class="progressText">
                      <el-col :span="12">
                        累计有效存款：{{
                          formatFigure(detail.current_deposit_amount)
                        }}&nbsp;元
                      </el-col>
                      <el-col :span="12" class="textRight red">
                        1,520&nbsp;元
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-progress
                          :stroke-width="14"
                          :percentage="
                            (detail.current_deposit_amount / 1500) * 100
                          "
                          :color="'#FCAF1E'"
                          :define-back-color="'#FBECC2'"
                          :show-text="false"
                        ></el-progress>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-col>
                <el-col :span="24">
                  <el-row type="flex" class="margin20">
                    <el-col :span="10" class="frames marginRight20">
                      可冲刺次数：<span class="figure">{{
                        formatFigure(detail.act1_left_time)
                      }}</span
                      >&nbsp;次
                    </el-col>
                    <el-col :span="14" class="frames">
                      已获得的积分：<span class="figure">{{
                        detail.act1_reword_point
                      }}</span
                      >&nbsp;/&nbsp;100&nbsp;积分
                    </el-col>
                  </el-row>
                </el-col>

                <el-col :span="24">
                  <el-row type="flex" justify="space-around">
                    <el-col :span="7">
                      <div
                        :class="{
                          submitBtnGray: detail.act1_left_time == 0,
                          submitBtn: detail.act1_left_time != 0,
                        }"
                        @click="showActivity('cc', 1)"
                      >
                        冲刺一次
                      </div>
                    </el-col>
                    <el-col :span="7">
                      <div
                        :class="{
                          submitBtnGray: detail.act1_left_time < 3,
                          submitBtn: detail.act1_left_time >= 3,
                        }"
                        @click="showActivity('cc', 3)"
                      >
                        冲刺三次
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="marginTop40">
                  <el-checkbox
                    v-model="detail.skip_animei"
                    @change="checkedCcChange"
                    >跳过开奖动画</el-checkbox
                  >
                </el-col>
              </el-col>
            </el-row>
          </div>
          <!-- 竞技篮球火 -->
          <div class="activeThemeContentItem" v-show="activeIndex == 2">
            <div>
              会员于5月20日至5月25日,于(体育、电竞、电子)任意平台,每累计有效投注2,888元即可获得一次投篮机会,完成投篮可获得随机彩金及随机积分。
            </div>
            <div class="activeThemeContentDesc">
              每项赛事最高可获得100点积分,且积分需在5月26日23:59:59之前获取,逾期视为放弃。活动中所获随机彩金可持续累计。
            </div>
            <el-row
              type="flex"
              justify="space-around"
              align="center"
              class="activeSection"
            >
              <el-col :span="12" class="textCenter">
                <img
                  src="../assets/image/people-jz.png"
                  alt=""
                  class="basketballStand"
                />
                <img
                  src="../assets/image/people-lq.png"
                  alt=""
                  class="activeSectionIcon"
                />
              </el-col>
              <el-col :span="12" class="sectionRight">
                <el-col :span="24">
                  <el-row
                    type="flex"
                    justify="space-between"
                    class="marginBottom30"
                  >
                    <el-col :span="14" class="btn noCursor">
                      已获得彩金：{{
                        formatFigure(detail.act2_reword_prize)
                      }}&nbsp;元
                    </el-col>
                    <el-col :span="8" class="textRight">
                      <div class="btnGray" @click="showRewardRecord('2')">
                        中奖记录
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="progress">
                  <el-col :span="24">
                    <el-row type="flex" class="progressText">
                      <el-col :span="12">
                        体育累计有效投注：{{
                          formatFigure(detail.current_ty_bet_amount)
                        }}&nbsp;元
                      </el-col>
                      <el-col :span="12" class="textRight red">
                        2,888&nbsp;元
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-progress
                          :stroke-width="14"
                          :percentage="
                            (detail.current_ty_bet_amount / 2888) * 100
                          "
                          :color="'#FCAF1E'"
                          :define-back-color="'#FBECC2'"
                          :show-text="false"
                        ></el-progress>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="24">
                    <el-row type="flex" class="progressText">
                      <el-col :span="12">
                        电竞累计有效投注：{{
                          formatFigure(detail.current_dj_bet_amount)
                        }}&nbsp;元
                      </el-col>
                      <el-col :span="12" class="textRight red">
                        2,888&nbsp;元
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-progress
                          :stroke-width="14"
                          :percentage="
                            (detail.current_dj_bet_amount / 2888) * 100
                          "
                          :color="'#FCAF1E'"
                          :define-back-color="'#FBECC2'"
                          :show-text="false"
                        ></el-progress>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="24">
                    <el-row type="flex" class="progressText">
                      <el-col :span="12">
                        电子累计有效投注：{{
                          formatFigure(detail.current_dz_bet_amount)
                        }}&nbsp;元
                      </el-col>
                      <el-col :span="12" class="textRight red">
                        2,888&nbsp;元
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-progress
                          :stroke-width="14"
                          :percentage="
                            (detail.current_dz_bet_amount / 2888) * 100
                          "
                          :color="'#FCAF1E'"
                          :define-back-color="'#FBECC2'"
                          :show-text="false"
                        ></el-progress>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-col>
                <el-col :span="24">
                  <el-row type="flex" class="margin20">
                    <el-col :span="10" class="frames marginRight20">
                      可投篮次数：<span class="figure">{{
                        formatFigure(detail.act2_left_time)
                      }}</span
                      >&nbsp;次
                    </el-col>
                    <el-col :span="14" class="frames">
                      已获得的积分：<span class="figure">{{
                        detail.act2_reword_point
                      }}</span
                      >&nbsp;/&nbsp;100&nbsp;积分
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24">
                  <el-row type="flex" justify="space-around">
                    <el-col :span="7">
                      <div
                        :class="{
                          submitBtnGray: detail.act2_left_time == 0,
                          submitBtn: detail.act2_left_time != 0,
                        }"
                        @click="showActivity('tl', 1)"
                      >
                        <div>投篮一次</div>
                      </div>
                    </el-col>
                    <el-col :span="7">
                      <div
                        :class="{
                          submitBtnGray: detail.act2_left_time < 3,
                          submitBtn: detail.act2_left_time >= 3,
                        }"
                        @click="showActivity('tl', 3)"
                      >
                        <div>投篮三次</div>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="marginTop40">
                  <el-checkbox
                    v-model="detail.skip_animei"
                    @change="checkedCcChange"
                    >跳过开奖动画</el-checkbox
                  >
                </el-col>
              </el-col>
            </el-row>
          </div>
          <!-- 力拔迎胜利 -->
          <div class="activeThemeContentItem" v-show="activeIndex == 3">
            <div>
              会员于5月20日至5月25日,于(真人、棋牌)任意平台,每累计有效盈利2,088元即可获得一次拔河机会,完成拔河比赛可获得随机彩金及随机积分。
            </div>
            <div class="activeThemeContentDesc">
              每项赛事最高可获得100点积分,且积分需在5月26日23:59:59之前获取,逾期视为放弃。活动中所获随机彩金可持续累计。
            </div>
            <el-row
              type="flex"
              justify="space-around"
              align="center"
              class="activeSection"
            >
              <el-col :span="12" class="textCenter">
                <img
                  src="../assets/image/people-bh.png"
                  alt=""
                  class="activeSectionIcon activeSectionIconBh"
                />
              </el-col>
              <el-col :span="12" class="sectionRight">
                <el-col :span="24">
                  <el-row
                    type="flex"
                    justify="space-between"
                    class="marginBottom30"
                  >
                    <el-col :span="14" class="btn noCursor">
                      已获得彩金：{{
                        formatFigure(detail.act3_reword_prize)
                      }}&nbsp;元
                    </el-col>
                    <el-col :span="8" class="textRight">
                      <div class="btnGray" @click="showRewardRecord('3')">
                        中奖记录
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="progress">
                  <el-col :span="24">
                    <el-row type="flex" class="progressText">
                      <el-col :span="12">
                        真人累计有效盈利：{{
                          formatFigure(detail.current_zr_win_amount)
                        }}&nbsp;元
                      </el-col>
                      <el-col :span="12" class="textRight red">
                        2,088&nbsp;元
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-progress
                          :stroke-width="14"
                          :percentage="
                            (detail.current_zr_win_amount / 2088) * 100
                          "
                          :color="'#FCAF1E'"
                          :define-back-color="'#FBECC2'"
                          :show-text="false"
                        ></el-progress>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="24">
                    <el-row type="flex" class="progressText">
                      <el-col :span="12">
                        棋牌累计有效盈利：{{
                          formatFigure(detail.current_qp_win_amount)
                        }}&nbsp;元
                      </el-col>
                      <el-col :span="12" class="textRight red">
                        2,088&nbsp;元
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-progress
                          :stroke-width="14"
                          :percentage="
                            (detail.current_qp_win_amount / 2088) * 100
                          "
                          :color="'#FCAF1E'"
                          :define-back-color="'#FBECC2'"
                          :show-text="false"
                        ></el-progress>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-col>
                <el-col :span="24">
                  <el-row type="flex" class="margin20">
                    <el-col :span="10" class="frames marginRight20">
                      可拔河次数：<span class="figure">{{
                        formatFigure(detail.act3_left_time)
                      }}</span
                      >&nbsp;次
                    </el-col>
                    <el-col :span="14" class="frames">
                      已获得的积分：<span class="figure">{{
                        detail.act3_reword_point
                      }}</span
                      >&nbsp;/&nbsp;100&nbsp;积分
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24">
                  <el-row type="flex" justify="space-around">
                    <el-col :span="7">
                      <div
                        :class="{
                          submitBtnGray: detail.act3_left_time == 0,
                          submitBtn: detail.act3_left_time != 0,
                        }"
                        @click="showActivity('bh', 1)"
                      >
                        <div>拔河一次</div>
                      </div>
                    </el-col>
                    <el-col :span="7">
                      <div
                        :class="{
                          submitBtnGray: detail.act3_left_time < 3,
                          submitBtn: detail.act3_left_time >= 3,
                        }"
                        @click="showActivity('bh', 3)"
                      >
                        <div>拔河三次</div>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="marginTop40">
                  <el-checkbox
                    v-model="detail.skip_animei"
                    @change="checkedCcChange"
                    >跳过开奖动画</el-checkbox
                  >
                </el-col>
              </el-col>
            </el-row>
          </div>
          <!-- 排位赛好礼 -->
          <div class="activeThemeContentItem" v-show="activeIndex == 4">
            <div>
              会员参与【极限奔跑吧 / 竞技篮球火 /
              力拔迎胜利】主题所累计积分,每3积分即可抽奖一次获得随机彩金。且可依照累计积分并于5月27日额外获得排位赛神秘彩金奖励,请会员及时点击领取，逾期默认为放弃
            </div>
            <!-- <div class="activeThemeContentDesc">
              每项赛事最高可获得100点积分,且积分需在5月26日23:59:59获取,逾期视为放弃。活动中所获随机彩金可持续累计。
            </div> -->
            <el-row
              type="flex"
              justify="space-around"
              align="center"
              class="activeSection"
            >
              <el-col :span="12" class="sectionRank">
                <el-row type="flex" justify="space-around">
                  <el-col :span="14" class="frames noMargin">
                    <div style="text-align: left">
                      可抽奖次数：{{ detail.act4_left_time }}&nbsp;次
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div
                      class="btnGray btnGrayCj"
                      @click="showRewardRecord('4')"
                    >
                      中奖记录
                    </div>
                  </el-col>
                </el-row>
                <el-row class="marginTop15">
                  <el-col :span="24">
                    <img src="../assets/image/award.png" alt="" />
                  </el-col>
                  <el-col :span="24">
                    <el-row
                      type="flex"
                      justify="space-around"
                      class="marginTop40"
                    >
                      <el-col :span="12" class="textCenter">
                        <div
                          :class="{
                            submitBtnGray: detail.act4_left_time == 0,
                            submitBtn: detail.act4_left_time != 0,
                          }"
                          @click="showActivity('cj', 1)"
                        >
                          <div>抽奖一次</div>
                        </div>
                      </el-col>
                      <el-col :span="12" class="textCenter">
                        <div
                          :class="{
                            submitBtnGray: detail.act4_left_time < 5,
                            submitBtn: detail.act4_left_time >= 5,
                          }"
                          @click="showActivity('cj', 5)"
                        >
                          <div>抽奖五次</div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="21">
                    <el-row type="flex" justify="space-around">
                      <el-col
                        :span="7"
                        class="textCenter marginTop40 checkStyle"
                      >
                        <el-checkbox
                          v-model="detail.skip_animei"
                          @change="checkedCcChange"
                          >跳过开奖动画</el-checkbox
                        >
                      </el-col>
                      <el-col :span="15" class="textCenter">
                        <div class="rankTips">
                          ※小贴士：抽奖时间为5月20日至5月26日。
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="12" class="textCenter sectionRank">
                <el-row>
                  <el-col :span="21">
                    <div class="frames noMargin">
                      累计积分：{{ detail.total_point }}&nbsp;积分/300&nbsp;积分
                    </div>
                  </el-col>
                  <el-col :span="21" class="marginTop15">
                    <img
                      src="../assets/image/rank-5.png"
                      v-if="detail.total_point == 300"
                      alt=""
                    />
                    <img
                      src="../assets/image/rank-4.png"
                      v-else-if="detail.total_point >= 200"
                      alt=""
                    />
                    <img
                      src="../assets/image/rank-3.png"
                      v-else-if="detail.total_point >= 150"
                      alt=""
                    />
                    <img
                      src="../assets/image/rank-2.png"
                      v-else-if="detail.total_point >= 100"
                      alt=""
                    />
                    <img
                      src="../assets/image/rank-1.png"
                      v-else-if="detail.total_point < 100"
                      alt=""
                    />
                  </el-col>
                  <el-col :span="21">
                    <div
                      :class="{
                        btn: detail.total_point >= 50,
                        btnGray:
                          detail.total_point < 50 ||
                          detail.act4_reword_prize != 0,
                      }"
                      @click="getRankReward"
                    >
                      领取排位赛奖励
                    </div>
                    <div class="rankTips">提示：排位赛奖励请于27号领取</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </div>
        <div
          class="tableData"
          v-if="activeIndex == 1 || activeIndex == 2 || activeIndex == 3"
        >
          <el-row :gutter="20" class="tableHead">
            <el-col :span="12">活动条件</el-col>
            <el-col :span="12">活动奖励</el-col>
          </el-row>
          <el-row :gutter="20" class="tableBody" v-if="activeIndex == 1">
            <el-col :span="12">每累计有效存款1,520元</el-col>
            <el-col :span="12">随机彩金+1点积分</el-col>
          </el-row>
          <el-row :gutter="20" class="tableBody" v-if="activeIndex == 2">
            <el-col :span="12">每累计有效投注2,888元</el-col>
            <el-col :span="12">随机彩金+随机积分</el-col>
          </el-row>
          <el-row :gutter="20" class="tableBody" v-if="activeIndex == 3">
            <el-col :span="12">每累计有效盈利2,088元</el-col>
            <el-col :span="12">随机彩金+随机积分</el-col>
          </el-row>
        </div>
        <div class="tableDataRank" v-if="activeIndex == 4">
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            :key="activeIndex"
          >
            <el-table-column prop="count" label="累计积分" align="center">
            </el-table-column>
            <el-table-column prop="reward" label="排位赛奖励" align="center">
            </el-table-column>
          </el-table>
        </div>
        <div class="tips">
          <div class="tipsTitle">【温馨提示】</div>
          <div class="tipsItem">1.本优惠所获彩金仅需完成五倍流水不限平台。</div>
          <div class="tipsItem">
            2.本优惠所需存款及投注不与其他活动共享，可与反水活动共享。
          </div>
          <div class="tipsItem" style="line-height: 40px">
            3.本优惠仅对已结算并产生输赢结果的投注流水进行计算。所有拒绝投注、打平、任何情况出现对押情况的投注（例：于百家乐同时下注庄家及闲家，百家乐当中开和退还本金）及赔率低于（万博体育、新万博体育、新亚洲体育、新万博电竞亚洲盘0.70，欧洲盘1.70）；（欧洲体育、万博电竞亚洲盘0.50，欧洲盘1.50）或其他对应赔率，串关投注将不予计算。
          </div>
          <div class="tipsItem">
            4.本优惠符合的会员需在【活动指定时间】内点击操作，超时既视为放弃该活动奖励。
          </div>
          <div class="tipsItemColor marginTop20">
            本优惠遵循ManBetX万博【一般优惠规则与条款】。
          </div>
        </div>
      </div>
    </div>
    <!-- 抽奖弹框 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="100%"
      :before-close="handleClose"
      class="rewardIframe"
      :fullscreen="true"
    >
      <img
        v-show="activityDialogType == 'cc' && elementVisibleCc"
        src="../assets/image/pb.gif"
        class="pic-dh-pb"
        alt=""
      />
      <img
        v-show="activityDialogType == 'bh' && elementVisibleCc"
        src="../assets/image/bh.gif"
        class="pic-dh-bh"
        alt=""
      />
      <img
        v-show="activityDialogType == 'tl' && elementVisibleCc"
        src="../assets/image/tl.gif"
        class="pic-dh-tl"
        alt=""
      />
      <img
        v-show="activityDialogType == 'cj' && elementVisibleCc"
        src="../assets/image/cj.gif"
        class="pic-dh-cj"
        alt=""
      />
      <!-- 冲刺 -->
      <div
        v-show="
          activityDialogType == 'cc' &&
          !elementVisibleCc &&
          rewardDetail.length != 0
        "
      >
        <img src="../assets/image/alert.png" alt="" />
        <div class="dialogContent">
          <div class="rewardIframeTitle">恭 喜 您 获 得</div>
          <div class="rewardIframeContent">
            <p v-for="(item, index) in rewardDetail" :key="index">
              {{ item.prize }}彩金<span v-show="item.point != 0">+1点积分</span>
            </p>
          </div>
        </div>
        <div class="dialogBtn" @click="handleClose">确定</div>
      </div>
      <!-- 投篮 -->
      <div
        v-show="
          activityDialogType == 'tl' &&
          !elementVisibleCc &&
          rewardDetail.length != 0
        "
      >
        <img src="../assets/image/alert.png" alt="" />
        <div class="dialogContent">
          <div class="rewardIframeTitle">恭 喜 您 获 得</div>
          <div class="rewardIframeContent">
            <p v-for="(item, index) in rewardDetail" :key="index">
              {{ item.prize }}彩金<span v-show="item.point != 0"
                >+{{ item.point }}点积分</span
              >
            </p>
          </div>
        </div>
        <div class="dialogBtn" @click="handleClose">确定</div>
      </div>
      <!-- 拔河 -->
      <div
        v-show="
          activityDialogType == 'bh' &&
          !elementVisibleCc &&
          rewardDetail.length != 0
        "
      >
        <img src="../assets/image/alert.png" alt="" />
        <div class="dialogContent">
          <div class="rewardIframeTitle">恭 喜 您 获 得</div>
          <div class="rewardIframeContent">
            <p v-for="(item, index) in rewardDetail" :key="index">
              {{ item.prize }}彩金<span v-show="item.point != 0"
                >+{{ item.point }}</span
              >点积分
            </p>
          </div>
        </div>
        <div class="dialogBtn" @click="handleClose">确定</div>
      </div>
      <!-- 抽奖 -->
      <div
        v-show="
          activityDialogType == 'cj' &&
          !elementVisibleCc &&
          rewardDetail.length != 0
        "
      >
        <img src="../assets/image/alert.png" alt="" />
        <div class="dialogContent">
          <div class="rewardIframeTitle">恭 喜 您 获 得</div>
          <div class="rewardIframeContent">
            <p v-for="(item, index) in rewardDetail" :key="index">
              {{ item.prize }}彩金
            </p>
          </div>
        </div>
        <div class="dialogBtn" @click="handleClose">确定</div>
      </div>
      <div
        v-show="!elementVisibleCc && rewardDetail.length == 0 && rewardTipsMsg"
        class="rewardZero"
      >
        <i class="el-icon-close errorIcon" @click="handleClose"></i>
        <div>提示</div>
        <div class="rewardContent">
          {{ rewardTipsMsg }}
        </div>
        <div class="rewardBtn" @click="handleClose">确定</div>
      </div>
    </el-dialog>
    <!-- 记录弹框 -->
    <el-dialog
      :visible.sync="dialogVisibleRecord"
      width="1000"
      :center="true"
      :before-close="handleCloseRecord"
      class="rewardRecord"
    >
      <img src="../assets/image/alert-bg.jpg" alt="" />
      <div class="recordContent">
        <div class="recordTitle">中奖记录</div>
        <div class="recordTable">
          <el-table :data="recordHistoryList" style="width: 100%">
            <el-table-column prop="created_at" label="时间" align="center">
            </el-table-column>
            <el-table-column prop="type" label="活动名称" align="center">
              <template slot-scope="scope">
                <span v-show="scope.row.type == '1'">极限奔跑吧</span>
                <span v-show="scope.row.type == '2'">竞技篮球火</span>
                <span v-show="scope.row.type == '3'">力拔迎胜利</span>
                <span v-show="scope.row.type == '4'">排位赛好礼</span>
                <span v-show="scope.row.type == '5'"
                  >排位赛好礼-排位赛奖励</span
                >
              </template>
            </el-table-column>
            <el-table-column prop="prize" label="活动奖品内容" align="center">
            </el-table-column>
          </el-table>
          <el-pagination
            class="paginationEl"
            v-show="recordHistoryListTotal > 0"
            @current-change="handleCurrentChange"
            layout="total, prev, pager, next"
            :page-size="recordHistoryPage.size"
            :total="recordHistoryListTotal"
          >
          </el-pagination>
        </div>
      </div>
    </el-dialog>
    <!--提示弹框 -->
    <el-dialog
      :title="'提示'"
      :visible.sync="dialogTips"
      width="400px"
      :before-close="handleCloseMsg"
      class="tipsDialog"
    >
      <div class="tipsContent">
        <div>{{ dialogTipsMsg }}</div>
      </div>
      <div class="rewardBtn" @click="handleCloseMsg">确定</div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  getActivityIndex,
  getPrize,
  recordHistory,
  getPrizeThird,
  skipAnimei,
  getSetting,
} from "@/api";
export default {
  data() {
    return {
      checked: false,
      tableData: [
        {
          count: "300分",
          reward: "冠军神秘奖励",
        },
        {
          count: "≥200分",
          reward: "亚军神秘奖励",
        },
        {
          count: "≥150分",
          reward: "季军神秘奖励",
        },
        {
          count: "≥100分",
          reward: "殿军神秘奖励",
        },
        {
          count: "≥50分",
          reward: "参赛神秘奖励",
        },
      ],
      recordHistoryList: [],
      recordHistoryListTotal: 0,
      recordHistoryPage: {
        page: 1,
        size: 10,
      },
      activeIndex: "1",
      dialogVisible: false,
      dialogVisibleRecord: false,
      elementVisibleCc: true,
      checkedCj: false,
      checkedCc: false,
      checkedTl: false,
      checkedBh: false,
      activityDialogType: "cc",
      detail: {
        act1_reword_prize: "0", //主题1
        act1_reword_point: "0", //已获得的积分
        current_deposit_amount: "0", //累计有效存款
        act1_left_time: 0, //可冲刺次数
        act2_reword_prize: "0", //主题2
        act2_reword_point: "0",
        current_ty_bet_amount: "0",
        current_dj_bet_amount: "0",
        current_dz_bet_amount: "0",
        act2_left_time: "0",
        act3_reword_prize: "0", //主题3
        act3_reword_point: "0", //
        current_zr_win_amount: "0",
        current_qp_win_amount: "0",
        act3_left_time: 0,
        act4_reword_prize: "0", //主题4
        act4_left_time: "0",
        total_point: "0",
        skip_animei: false,
      },
      rewardDetail: [],
      dialogTips: false,
      dialogTipsMsg: "",
      rewardTipsMsg: "",
      plaseLogin: "登录即可参与ManBetX万博“520万博运动惠”专题活动！",
      openSetting: {},
    };
  },
  computed: {
    ...mapGetters(["username"]),
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      if (!this.username) {
        // this.dialogTipsMsg = this.plaseLogin
        // this.dialogTips = true
      } else {
        getSetting().then((res) => {
          this.openSetting = res.data;
          getActivityIndex().then((res) => {
            if (res.code != 200) {
              this.dialogTipsMsg = res.message;
              this.dialogTips = true;
            } else {
              this.detail = Object.assign(res.data, {
                skip_animei: res.data.skip_animei == "1" ? true : false,
              });
              if (
                !this.openSetting.theme1_is_open ||
                this.openSetting.theme1_status != 2
              ) {
                this.detail.act1_reword_prize = 0;
                this.detail.act1_reword_point = 0;
                this.detail.act1_left_time = 0;
                this.detail.current_deposit_amount = 0;
              }
              if (
                !this.openSetting.theme2_is_open ||
                this.openSetting.theme2_status != 2
              ) {
                this.detail.act2_reword_prize = 0;
                this.detail.act2_reword_point = 0;
                this.detail.act2_left_time = 0;
                this.detail.current_ty_bet_amount = 0;
                this.detail.current_dj_bet_amount = 0;
                this.detail.current_dz_bet_amount = 0;
              }
              if (
                !this.openSetting.theme3_is_open ||
                this.openSetting.theme3_status != 2
              ) {
                this.detail.act3_reword_prize = 0;
                this.detail.act3_reword_point = 0;
                this.detail.act3_left_time = 0;
                this.detail.current_zr_win_amount = 0;
                this.detail.current_qp_win_amount = 0;
              }
              if (
                !this.openSetting.draw_is_open ||
                this.openSetting.draw_status != 2
              ) {
                this.detail.act4_reword_prize = 0;
                this.detail.act4_left_time = 0;
                this.detail.total_point = 0;
              }
              this.elementVisibleCc = !this.detail.skip_animei;
            }
          });
        });
      }
    },
    returnMsg(type, status, msg) {
      if (!this.username) {
        return this.plaseLogin;
      }
      if (!this.openSetting[type]) {
        return "活动暂未开启，请耐心等待!";
      } else {
        if (this.openSetting[status] == 1) {
          return "活动暂未开启，请耐心等待!";
        } else if (this.openSetting[status] == 2) {
          return msg;
        } else if (this.openSetting[status] == 3) {
          return "活动已结束";
        }
      }
    },
    // 抽奖弹框
    showActivity(type, count) {
      if (type == "cc") {
        if (
          this.detail.act1_left_time != 0 &&
          Number(this.detail.act1_left_time) >= Number(count)
        ) {
          this.dialogVisible = true;
          if (!this.detail.skip_animei)
            setTimeout(() => {
              this.elementVisibleCc = false;
            }, 3000);
          this.gainWard(1, count);
        } else {
          this.dialogTipsMsg = this.returnMsg(
            "theme1_is_open",
            "theme1_status",
            "冲刺次数不足！"
          );
          this.dialogTips = true;
        }
      } else if (type == "tl") {
        if (
          this.detail.act2_left_time != 0 &&
          Number(this.detail.act2_left_time) >= Number(count)
        ) {
          this.dialogVisible = true;
          if (!this.detail.skip_animei)
            setTimeout(() => {
              this.elementVisibleCc = false;
            }, 3000);
          this.gainWard(2, count);
        } else {
          this.dialogTipsMsg = this.returnMsg(
            "theme2_is_open",
            "theme2_status",
            "投篮次数不足！"
          );
          this.dialogTips = true;
        }
      } else if (type == "bh") {
        if (
          this.detail.act3_left_time != 0 &&
          Number(this.detail.act3_left_time) >= Number(count)
        ) {
          this.dialogVisible = true;
          if (!this.detail.skip_animei)
            setTimeout(() => {
              this.elementVisibleCc = false;
            }, 3000);
          this.gainWard(3, count);
        } else {
          this.dialogTipsMsg = this.returnMsg(
            "theme3_is_open",
            "theme3_status",
            "拔河次数不足！"
          );
          this.dialogTips = true;
        }
      } else if (type == "cj") {
        if (
          this.detail.act4_left_time != 0 &&
          Number(this.detail.act4_left_time) >= Number(count)
        ) {
          this.dialogVisible = true;
          if (!this.detail.skip_animei)
            setTimeout(() => {
              this.elementVisibleCc = false;
            }, 3000);
          this.gainWard(4, count);
        } else {
          this.dialogTipsMsg = this.returnMsg(
            "draw_is_open",
            "draw_status",
            "抽奖次数不足！"
          );
          this.dialogTips = true;
        }
      }
    },
    getRankReward() {
      getPrize({
        act: 5,
        times: 1,
      }).then((res) => {
        if (res.code != 200) {
          this.dialogTipsMsg = this.returnMsg(
            "theme5_is_open",
            "theme5_status",
            res.message
          );
          this.dialogTips = true;
        } else {
          this.dialogTipsMsg = "获得彩金：" + res.data[0].prize + "元";
          this.dialogTips = true;
          this.getList();
        }
      });
    },
    gainWard(act, count) {
      if (act != 4) {
        getPrize({
          act: act,
          times: count,
        }).then((res) => {
          if (res.code != 200) {
            this.rewardTipsMsg = res.message;
          } else {
            this.rewardDetail = res.data;
          }
        });
      } else {
        getPrizeThird({
          act: act,
          times: count,
        }).then((res) => {
          if (res.code != 200) {
            this.rewardTipsMsg = res.message;
          } else {
            this.rewardDetail = res.data;
          }
        });
      }
    },
    handleClose() {
      this.dialogVisible = false;
      this.rewardDetail = [];
      if (!this.detail.skip_animei) {
        setTimeout(() => (this.elementVisibleCc = true), 300);
      } else {
        this.elementVisibleCc = false;
      }
      this.getList();
    },
    // 抽奖复选框
    checkedCcChange(val) {
      skipAnimei({
        skip_animei: val ? "1" : "2",
      }).then((res) => {
        if (res.code != 200) {
          this.dialogTipsMsg = res.message;
          this.dialogTips = true;
        } else {
          this.getList();
        }
      });
    },
    // 历史记录
    showRewardRecord(type) {
      recordHistory(
        Object.assign(this.recordHistoryPage, {
          type: type,
        })
      ).then((res) => {
        if (res.code != 200) {
          this.dialogTipsMsg = res.message;
          this.dialogTips = true;
        } else {
          this.recordHistoryList = res.data.list;
          this.recordHistoryListTotal = res.data.total;
          this.dialogVisibleRecord = true;
        }
      });
    },
    handleCurrentChange(val) {
      this.recordHistoryPage.page = val;
      this.showRewardRecord(this.activeIndex);
    },
    handleCloseRecord() {
      this.dialogVisibleRecord = false;
      this.recordHistoryPage = {
        page: 1,
        size: 10,
      };
    },
    changaTabs(tabsIndex, type) {
      this.activeIndex = tabsIndex;
      this.activityDialogType = type;
      if (!this.detail.skip_animei) {
        this.elementVisibleCc = true;
      }
    },
    handleCloseMsg() {
      this.dialogTips = false;
      this.dialogTipsMsg = "";
    },
    formatFigure(num) {
      var reg = /\d{1,3}(?=(\d{3})+$)/g;
      if (num && num.toString().indexOf(".") == -1) {
        return (num + "").replace(reg, "$&,");
      } else {
        return num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
          return $1 + ",";
        });
      }
    },
  },
  watch: {},
};
</script>

<style lang="stylus" scoped>
.index {
  height: 2930px;
  width: 100vw;
  background: url('../assets/image/bg.jpg');
  background-size: 100% 100%;
  clearfix();
  font-family: MicrosoftYaHei;
}

.main {
  width: 1200px;
  margin: 960px auto 0;

  .activeContent {
    height: 105px;
    padding: 0 5px;
    background: #FFFFFF;
    background-image: linear-gradient(180deg, #FFFFFF 0%, #FEEEC8 100%);
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.12);

    .activeDetail {
      text-align: center;
      color: #343434;
      font-size: 14px;
    }

    .gridContentBorder {
      position: relative;
    }

    .gridContentBorder::after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 70px;
      position: absolute;
      top: 0px;
      right: 0px;
      background-image: linear-gradient(bottom, #fff -100%, orange 50%, #fff 100%);
    }

    .gridContentBorderLast:after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 0px;
    }

    item >div {
      height: 36px;
      line-height: 36px;
      font-size: 24px;
      color: #333333;
      text-align: center;
      line-height: 36px;
      font-weight: 600;
    }

    .item div:nth-child(1) {
      margin: 15px 0 8px 0;
      font-family: MicrosoftYaHei-Bold;
      font-size: 24px;
      color: #333333;
      text-align: center;
      font-weight: 700;
    }
  }

  .activeTheme {
    margin: 15px 0 15px 0;
    height: 122px;
    overflow: hidden;

    >div {
      float: left;
      width: 25%;
      height: 112px;
      color: black;
      text-align: center;
      position: relative;
      cursor: pointer;

      .activeThemeIcon {
        width: 345px;
        height: 122px;
        position: absolute;
        top: 0px;
        left: -12px;
        z-index: 0;
      }

      .activeThemeTitle {
        font-size: 32px;
        font-weight: bold;
        margin: 10px 0;
        color: #333333;
        position: relative;
        top: 25px;
        left: 45px;
      }

      .activeThemeTitleActive {
        font-size: 32px;
        font-weight: bold;
        margin: 10px 0;
        color: white;
        position: relative;
        top: 25px;
        left: 45px;
      }
    }
  }

  .activeThemeContent {
    height: 692px;
    border-radius: 15px;
    color: black;
    position: relative;

    .activeThemeContentIcon {
      width: 1249px;
      height: 750px;
      position: absolute;
      top: -17px;
      left: -25px;
      z-index: 0;
    }

    .activeThemeContentItem {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 1200px;
      height: 682px;
      padding: 15px 10px;
      z-index: 1;

      >div:nth-child(1) {
        font-size: 18px;
        color: #333333;
        text-align: left;
        font-weight: 400;
        padding: 0px 5px;
        line-height: 30px;
      }

      >div:nth-child(2) {
        font-size: 16px;
        color: #FD4E06;
        text-align: left;
        font-weight: 400;
        padding-left: 5px;
      }
    }
  }

  .activeThemeContentDesc {
    color: #fd5b13;
    padding: 10px 0;
    font-size: 16px;
  }

  .tableData {
    margin: 120px 0;

    .tableHead>div {
      font-family: MicrosoftYaHei-Bold;
      font-size: 22px;
      color: #333333;
      text-align: center;
      font-weight: bold;
    }

    .tableBody>div {
      font-family: MicrosoftYaHei;
      font-size: 20px;
      color: #333333;
      text-align: center;
      font-weight: 400;
      margin-top: 20px;
    }
  }

  .tableDataRank {
    margin: 40px 0 40px 0;
  }

  .tableDataRank>>>.el-table {
    border-radius: 8px;
  }

  .tableData >>> .el-table thead {
    color: black;
    font-weight: bold;
  }

  .tableData >>> .el-table .el-table__row {
    color: #565656;
  }

  .tableData >>>.el-table th.el-table__cell.is-leaf, .tableData >>>.el-table td.el-table__cell {
    border: none;
  }

  .tableData >>>.el-table::before {
    background-color: transparent;
  }

  .tableData >>>.el-table th.el-table__cell>.cell, .tableDataRank >>>.el-table th.el-table__cell>.cell {
    font-family: MicrosoftYaHei-Bold;
    font-size: 22px;
    color: #333333;
    text-align: center;
    font-weight: 700;
  }

  .tableData >>>.el-table td.el-table__cell div, .tableDataRank >>>.el-table td.el-table__cell div {
    font-family: MicrosoftYaHei;
    font-size: 20px;
    color: #333333;
    text-align: center;
    font-weight: 400;
  }

  .tableDataRank>>>.el-table, .tableDataRank>>>.el-table tbody tr {
    background: white;
  }

  .tableDataRank >>>.el-table thead, .tableDataRank >>>.el-table th.el-table__cell {
    background-image: linear-gradient(180deg, #FEF2D4 0%, #FFF9E4 100%);
  }

  .tips {
    color: black;
    padding: 0 50px 0px 20px;
    font-family: MicrosoftYaHei-Bold;

    .tipsTitle {
      font-size: 22px;
      color: #333333;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .tipsItem {
      margin: 5px 0;
      font-size: 18px;
      color: #333333;
      line-height: 37px;
      font-weight: 400;
    }

    .tipsItemColor {
      font-family: MicrosoftYaHei;
      font-size: 18px;
      color: #FD4E06;
      font-weight: 400;
    }
  }

  .activeSection {
    height: 460px;
    font-size: 14px;

    .activeSectionIcon {
      margin-top: 0px;
    }

    .activeSectionIconBh {
      margin-top: 30px;
    }

    .basketballStand {
      position: relative;
      top: -290px;
      left: -20px;
    }
  }

  .sectionRight {
    color: 14px;
    padding: 40px 35px 0 40px;

    >>> .el-checkbox__input.is-checked+.el-checkbox__label {
      color: orange;
    }

    >>> .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: orange;
      border-color: orange;
    }

    >>> .el-checkbox__input.is-focus .el-checkbox__inner {
      border-color: orange;
    }
  }

  .checkStyle {
    >>> .el-checkbox__input.is-checked+.el-checkbox__label {
      color: orange;
    }

    >>> .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: orange;
      border-color: orange;
    }

    >>> .el-checkbox__input.is-focus .el-checkbox__inner {
      border-color: orange;
    }
  }

  .sectionRank {
    padding: 20px 35px 0 40px;
  }

  .frames {
    display: inline-block;
    height: 44px;
    line-height: 44px;
    border: 1px solid orange;
    margin: 20px 0;
    padding: 0 10px;
    text-align: center;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    color: #333333;
    border-radius: 8px;

    .figure {
      font-size: 22px;
      color: #FD4E06;
      text-align: center;
      line-height: 29px;
      font-weight: 400;
      position: relative;
      top: 2px;
      left: 0;
    }
  }

  .btn {
    height: 55px;
    line-height: 55px;
    display: inline-block;
    padding: 0px 20px;
    cursor: pointer;
    border-radius: 8px;
    background-image: linear-gradient(270deg, #FCB51B 2%, #FF942E 97%);
    box-shadow: 0px 2px 4px 0px rgba(255, 194, 52, 0.5);
    font-size: 22px;
    color: #FFFFFF;
    text-align: left;
    font-weight: 400;
  }

  .btnGray {
    height: 55px;
    line-height: 55px;
    display: inline-block;
    padding: 0px 20px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0px 2px 4px 0px rgba(255, 194, 52, 0.5);
    font-size: 22px;
    color: #FFFFFF;
    text-align: left;
    font-weight: 400;
    background-image: linear-gradient(180deg, #CECECE 0%, #EAE7E7 100%);
    color: #333333;
  }

  .btnGrayCj {
    height: 44px;
    line-height: 44px;
  }

  .noCursor {
    cursor: default;
  }

  .submitBtn {
    display: inline-block;
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    background-image: linear-gradient(270deg, #FCB51B 2%, #FF942E 97%);
    box-shadow: 0px 2px 4px 0px rgba(255, 194, 52, 0.5);
    font-size: 20px;
    color: #FFFFFF;
    text-align: left;
    font-weight: 400;
    transform: skewX(-25deg);

    >div {
      transform: skewX(25deg);
    }
  }

  .submitBtnGray {
    display: inline-block;
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    background-image: linear-gradient(180deg, #CECECE 0%, #EAE7E7 100%);
    box-shadow: 0px 2px 4px 0px rgba(255, 194, 52, 0.5);
    font-size: 20px;
    color: #333;
    text-align: center;
    font-weight: 400;
    border-radius: 8px;
  }

  .progress {
    padding: 20px 0 0 0;
    height: 200px;

    >div {
      margin-bottom: 20px;
    }

    .progressText {
      margin-bottom: 8px;
      font-size: 18px;
      color: #333333;
      font-weight: 400;
    }
  }

  .rankTips {
    font-size: 14px;
    color: #FD4E06;
    text-align: center;
    font-weight: 400;
    margin-top: 40px;
  }

  .white {
    color: white;
  }

  .black {
    color: black;
  }

  .red {
    color: red;
  }

  .border {
    border: 1px solid orange;
  }

  .marginTop20 {
    margin-top: 20px !important;
  }

  .marginTop40 {
    margin-top: 40px !important;
  }

  .marginTop15 {
    margin-top: 15px !important;
  }

  .marginBottom20 {
    margin-bottom: 20px !important;
  }

  .marginBottom30 {
    margin-bottom: 30px !important;
  }

  .marginBottom10 {
    margin-bottom: 10px !important;
  }

  .marginRight20 {
    margin-right: 20px !important;
  }

  .margin20 {
    margin: 20px 0;
  }

  .textRight {
    text-align: right;
  }

  .textCenter {
    text-align: center;
  }

  .textRight {
    text-align: right;
  }

  .noMargin {
    margin: 0;
  }
}

.container {
  pcWrapper();
}

.rewardIframe >>>.el-dialog {
  background: transparent;
  box-shadow: none;
  height: 100%;
  position: relative;
}

.rewardIframe >>>.el-dialog__body {
  text-align: center;
}

.rewardIframe >>>.el-dialog__header {
  display: none;
}

.rewardIframe img {
  position: absolute;
  top: calc(50% - 400px);
  left: calc(50% - 319px);
}

.rewardIframe .rewardZero {
  width: 400px;
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  background: white;
  color: #333;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-size: 16px;

  .rewardContent {
    background: #FFF3E7;
    border-radius: 8px;
    padding: 20px;
    margin: 15px 0;
    line-height: 40px;
  }
}

.errorIcon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.rewardBtn {
  width: 100px;
  height: 44px;
  line-height: 44px;
  background-image: linear-gradient(90deg, #FF654C 1%, #F68016 100%);
  border: 1.98px solid rgba(255, 255, 255, 0.26);
  box-shadow: inset 0px 1px 3px 0px rgba(255, 255, 255, 0.93);
  box-shadow: 0px 2px 4px 0px rgba(253, 78, 6, 0.31);
  border-radius: 33.66px;
  font-family: MicrosoftYaHei;
  cursor: pointer;
  position: relative;
  left: 130px;
  color: #fff;
  text-align: center;
  margin-top: 15px;
}

.pic-dh-cj {
  top: calc(50% - 110px) !important;
}

.pic-dh-pb {
  top: calc(50% - 210px) !important;
  left: calc(50% - 200px) !important;
}

.pic-dh-bh {
  top: calc(50% - 210px) !important;
  left: calc(50% - 319px) !important;
}

.pic-dh-tl {
  top: calc(50% - 283px) !important;
  left: calc(50% - 292px) !important;
}

.dialogContent {
  width: 418px;
  height: 300px;
  position: absolute;
  top: calc(50% - 70px);
  left: calc(50% - 170px);

  .rewardIframeTitle {
    font-family: MicrosoftYaHei-Bold;
    font-size: 44px;
    color: #FD4E06;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .rewardIframeContent p {
    font-family: MicrosoftYaHei;
    font-size: 23.76px;
    color: #FFFFFF;
    font-weight: 400;
    line-height: 28px;
  }
}

.dialogBtn {
  position: absolute;
  width: 346px;
  height: 66px;
  text-align: center;
  line-height: 66px;
  top: calc(50% + 230px);
  left: calc(50% - 135px);
  background-image: linear-gradient(90deg, #FF654C 1%, #F68016 100%);
  border: 1.98px solid rgba(255, 255, 255, 0.26);
  box-shadow: inset 0px 1px 3px 0px rgba(255, 255, 255, 0.93);
  box-shadow: 0px 2px 4px 0px rgba(253, 78, 6, 0.31);
  border-radius: 33.66px;
  font-family: MicrosoftYaHei;
  font-size: 22px;
  color: #FFFFFF;
  font-weight: 400;
  cursor: pointer;
}

.rewardRecord >>>.el-dialog {
  width: 700px;
  height: 750px;
  box-shadow: none;
  position: relative;
}

.rewardRecord img {
  width: 100%;
  height: 660px;
}

.paginationEl {
  text-align: right;
  padding-top: 10px;

  >>>button:disabled, .btn-prev, .btn-next {
    background: transparent !important;
  }

  >>>.el-pager li {
    background: transparent !important;
  }
}

.recordContent {
  width: calc(100% - 40px);
  height: 100%;
  position: absolute;
  top: 0;
  left: 20px;
  padding: 0 15px;
  z-index: 1;
}

.rewardRecord >>> .el-icon-close:before {
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
  color: red;
  position: relative;
  right: 0px;
  top: 0px;
  z-index: 3;
}

.rewardRecord >>> .el-table__header {
  border-radius: 8px;
}

.recordTitle {
  margin-top: 70px;
  text-align: center;
  font-family: MicrosoftYaHei;
  font-size: 30px;
  color: #FFFFFF;
  letter-spacing: 0;
  font-weight: 400;
}

.recordTable {
  height: calc(100% - 170px);
  background: white;
  margin-top: 10px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.17);
  border-radius: 8px;
}

.recordTable>>>.el-table {
  border-radius: 8px;
}

.tipsDialog {
  >>>.el-dialog__header {
    text-align: center;
  }

  >>>.el-dialog__body {
    padding: 10px 20px 20px;
  }
}

.tipsContent {
  background: #FFF3E7;
  border-radius: 8px;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #333333;
  font-weight: 400;
  line-height: 40px;
}
</style>


<style  lang="less" >
.desc {
  font-size: 18px;
  color: #333333;
  text-align: center;
  padding-top: 10px;
}
.platform {
  padding-top: 0;

  span {
    display: block;
    font-size: 16px;
  }
}
.activity-desc {
  text-align: center;
}
.activeTitle {
  width: 1262px;
  height: 190px;
  background: url("~@/assets/image/titleBanner.png") center no-repeat;
  background-size: cover;

  .bgText {
    text-align: center;
    padding-top: 20px;

    div {
      font-family: FZZDHJW--GB1-0;
      font-size: 36px;
      color: transparent;
      background: linear-gradient(#fb4343, #fb9a2b);
      -webkit-background-clip: text;
      font-weight: bold;
    }
  }
}
</style>