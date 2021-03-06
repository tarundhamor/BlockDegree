$("document").ready(() => {
  console.log("on ready called statistics");
  $.ajax({
    url: "/api/getXinFinStats",
    method: "GET",
    success: res => {
      console.log("Response: ", res);
      animateNumberIncrease(0, res.siteData.userCnt, "stat-userRegistrations");
      animateNumberIncrease(0, res.siteData.visitCnt, "stat-courseVisits");
      animateNumberIncrease(0, res.siteData.caCnt, "stat-campAmbas");
      animateNumberIncrease(0, res.siteData.totCertis, "stat-certiIssued");
      // burnTokenAmnt
      animateNumberIncrease(0, rndDeci3(res.netData.burntBalance), "burnTokenAmnt");
      animateNumberIncrease(0, rndDeci3(res.netData.totalStakedValue), "lockedTokensXDC");
      animateNumberIncrease(0, res.netData.totalMasterNodes, "masterLiveCnt");
      animateNumberIncrease(0, rndDeci3(res.netData.xdcVol24HR), "dailyVol");
      animateNumberIncrease(0, rndDeci3(res.netData.monthlyRewardPer), "returnApprMonth");
      animateNumberIncrease(0, rndDeci3(res.netData.yearlyRewardPer), "returnApprAnnual");
      animateNumberIncrease(
        0,
        rndDeci3(res.netData.totalStakedValueFiat),
        "lockedTokenFiat"
      ); //totalXDCFiat
      animateNumberIncrease(0, rndDeci3(res.netData.monthlyRewards), "rewardsXDC"); // rewardsFIAT
      animateNumberIncrease(0, rndDeci3(res.netData.totalXDCFiat), "marketCap"); // rewardsFIAT
      animateNumberIncrease(0, rndDeci4(res.netData.priceUsd), "currXDCPrice");
      animateNumberIncrease(0, rndDeci3(res.netData.monthlyRewardsFiat), "rewardsFIAT");
      $.notifyClose("bottom-right");
    },
    error: err => {
      console.log("Error from api/getXinFinStats: ", err);
      $.notifyClose("bottom-right");
    }
  });
});

function animateNumberIncrease(currVal, desiredVal, elemId) {
  const interval = setInterval(() => {
    let exisVal = parseInt(document.getElementById(elemId).innerHTML);
    if (exisVal != NaN)
      if (exisVal >= desiredVal) {
        document.getElementById(elemId).innerHTML = desiredVal;
        clearInterval(interval);
        return;
      }
    let incr = Math.floor((30 * (desiredVal - currVal)) / 1000)
      ? Math.floor((30 * (desiredVal - currVal)) / 1000)
      : Math.ceil((30 * (desiredVal - currVal)) / 1000);
    document.getElementById(elemId).innerHTML = exisVal + incr;
  }, 30);
}

function rndDeci3(n) {
  return Math.round(parseFloat(n) * 1000) / 1000;
}

function rndDeci4(n) {
  return Math.round(parseFloat(n) * 10000) / 10000;
}
