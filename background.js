chrome.action.onClicked.addListener(async (tab) => {
  const imageUrl = await getRandomCatPhoto();
  chrome.storage.local.set({ imageUrl: imageUrl }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	let tabID =  tabs[0]?.id
	console.log(tabs.length);
      if (tabs.length == 0) {
        chrome.tabs.create({ url: "https://www.google.com/" }, (tab) => {
			console.log( chrome.scripting.executeScript);
            tabID = tab.id
        });
      } 
	  console.log(tabID)
	  chrome.storage.local.get("imageUrl", (result) => {
		const imageUrl = result["imageUrl"];
		if (imageUrl) {
			console.log(imageUrl);
			chrome.scripting.insertCSS({
			  target: { tabId: tabID },
			  css: `
				html body {
				  background-image: url("${imageUrl}") !important;
				  background-repeat: repeat-y !important;
  				   background-size: 100% !important;
				  z-index: 9999;
				}
				div {
					background-image: none !important;
					background-color: none !important;
				}
				  `
			});
		  }
	  });
    });
  });
});

async function getRandomCatPhoto() {
	// 가져온 unsplash_cat 배열 사용
	const randomIndex = Math.floor(Math.random() * unsplash_cat.length);
	const imageUrl = unsplash_cat[randomIndex];
  	// const extensionId = chrome.runtime.id;
	// const randomNumber = Math.floor(Math.random() * 71) + 1;
	//const imgUrl = `chrome-extension://${extensionId}/unsplash_cat/cat_unsplash%20(${randomNumber}).jpg`;
  const imgUrl = imageUrl;
  return imgUrl;
}

const unsplash_cat = [
	'https://drive.google.com/uc?export=view&id=1-3nLSyfJSVeNtoXKoqcYGytBzgjYziPr',
	'https://drive.google.com/uc?export=view&id=1-YDSLgsUShDD6xVGvdB9_awWEhKxhMS9',
	'https://drive.google.com/uc?export=view&id=12MCkWd-iRt9ZMOms7957mANHNlOJz8ZV',
	'https://drive.google.com/uc?export=view&id=138n_r8MC2wdDHVYXUa1iccQS6LVoA3Ae',
	'https://drive.google.com/uc?export=view&id=13ihQl2H-4aZ1UVtC_INJbUqP60zIhlLb',
	'https://drive.google.com/uc?export=view&id=15B_Byak3TkEUwNWYCDI9x1XA-ORqw2R5',
	'https://drive.google.com/uc?export=view&id=17EJC3kjI7Y0-j6GJw5VMyqhzLh3g2CC7',
	'https://drive.google.com/uc?export=view&id=17RxYX15AbKJxVLc9UY2pCWtkjFmEdIxi',
	'https://drive.google.com/uc?export=view&id=17_ZVZ0QZp3SLjMlGm32bEEEuvPuyEErN',
	'https://drive.google.com/uc?export=view&id=19TqHM9UBU0dCTQyCXxHtTi8Xc0N8H9Ma',
	'https://drive.google.com/uc?export=view&id=1A_pDB2at2zR8VJkCL5Ub_JT31wJ58fxd',
	'https://drive.google.com/uc?export=view&id=1Bl8YaHaTyRXe2gdmBZxuISguOXyipU8_',
	'https://drive.google.com/uc?export=view&id=1CWhRuCjE0wfRXaBqGFUux_OI58vkt-fW',
	'https://drive.google.com/uc?export=view&id=1CnjQkz5lKF-7W0TEJYf4sl75tmpmQS0V',
	'https://drive.google.com/uc?export=view&id=1EOSgtE_lsyRAo_b2wVC6BdsBID9ohHN_',
	'https://drive.google.com/uc?export=view&id=1ETX5pE2HVyasba_QcEKgAgM4_3X8_jbw',
	'https://drive.google.com/uc?export=view&id=1EYqGKkI3gR3We_Ol4GCjZkWrpnTY0K4n',
	'https://drive.google.com/uc?export=view&id=1FH0U0r3AT_WFyVxm-dJmNGvvwmmdWUHu',
	'https://drive.google.com/uc?export=view&id=1FwkCDv8WP7f2iUJLnrPahRVt2M43QaEU',
	'https://drive.google.com/uc?export=view&id=1G3b-pqqcU9KSLp3l3p6GAofVChuyM9IJ',
	'https://drive.google.com/uc?export=view&id=1GFxia-Pevdlw2BZ1by9JZBo5rOiqhDcs',
	'https://drive.google.com/uc?export=view&id=1IZ8B6C8l-c1kRMYrA5Iq6fmHJJHR6Vmh',
	'https://drive.google.com/uc?export=view&id=1JENBYaW4v9eRp2pss9z37EYeWACHYvpb',
	'https://drive.google.com/uc?export=view&id=1JlZbqPqXt8Jn1FViIwt_EMqfPuufbRU7',
	'https://drive.google.com/uc?export=view&id=1L5_0J00ErmZvCzSAW7mnTGaMEhViRWpq',
	'https://drive.google.com/uc?export=view&id=1L_eV-It2pDNfOnYZHKMPADXoIGx0zAiV',
	'https://drive.google.com/uc?export=view&id=1MCenVSuTznNkOG7odSg2kvg0WRNdP_L6',
	'https://drive.google.com/uc?export=view&id=1N8C0zUiFqLGmBZqgt07O67erVeVrQCX2',
	'https://drive.google.com/uc?export=view&id=1NANgT6wrrBgGPnXqVmUc0i0-bSaN8rgJ',
	'https://drive.google.com/uc?export=view&id=1Nzrj41RV42vXWe60gBMyK4ThxyXfSuFJ',
	'https://drive.google.com/uc?export=view&id=1OAL9onvjnFh0WmKmR1tbR07I80NqL7am',
	'https://drive.google.com/uc?export=view&id=1P00cEFFUpbRTs76pl9_4IaR_1TSl3JGL',
	'https://drive.google.com/uc?export=view&id=1PvI5v9283Jy1z9RuHRV3VKxIAgp1wfJM',
	'https://drive.google.com/uc?export=view&id=1RaVB-ASxDB2hqg2ryeuKmTbJJWoI-L1x',
	'https://drive.google.com/uc?export=view&id=1SfYEUc9DuvGyEj6qlenHTkJlE4dqMXtA',
	'https://drive.google.com/uc?export=view&id=1SxtJiuAyyFsAWwm__jugvS4CCLKqIiQ9',
	'https://drive.google.com/uc?export=view&id=1UgQPrLdhPf5KVs3TPbXryfrFIdwZe0ig',
	'https://drive.google.com/uc?export=view&id=1VLXD2eNqy9kLWgC5gAOq2euuN9J_pBsZ',
	'https://drive.google.com/uc?export=view&id=1W5syQxVjCPJq4JeYbMH6Pl_OcfttxXOU',
	'https://drive.google.com/uc?export=view&id=1XwmZ0hQ3O0epKEOS6uEvpAnoGDM1lZ91',
	'https://drive.google.com/uc?export=view&id=1Z4CkjiiGqW6jVK6LVLm55VsagblJ8B_V',
	'https://drive.google.com/uc?export=view&id=1Z9xdRS-jYPQi8jqJzbvqb5GtuZLPNMi_',
	'https://drive.google.com/uc?export=view&id=1ZBleC5TEw5hstcNVBvbct_OI6QL5a8fO',
	'https://drive.google.com/uc?export=view&id=1aM5OLP31EXP6oJcx_QQ1RfIwfZkYDiJJ',
	'https://drive.google.com/uc?export=view&id=1baaudRTOHGWYH4mpp8sy6F6pLusz-C2T',
	'https://drive.google.com/uc?export=view&id=1cA7nw3DHJPsxOCnvcTPKWqnJTAc2OzFD',
	'https://drive.google.com/uc?export=view&id=1dJssbZzKxgvQ3S02gh8ZNsbUMkPVgAvc',
	'https://drive.google.com/uc?export=view&id=1eMJbZiSD_eeTU7FXliVoAcBnNhuUEbeq',
	'https://drive.google.com/uc?export=view&id=1fEEg-SJa4YDlgG60j15H1aQQRAAJdnTI',
	'https://drive.google.com/uc?export=view&id=1fG44uA_dN1bL-S9Hwjfew-vmkNTw1nBT',
	'https://drive.google.com/uc?export=view&id=1gTJ0MBo8WABOzlFo82qtjODZXX6-ihxI',
	'https://drive.google.com/uc?export=view&id=1gu4a7pAz00_7Aq3oHaBhUrsG_0RXIHWa',
	'https://drive.google.com/uc?export=view&id=1h60NuRDKnmY2BYWpg5LqUYFdIztJetE7',
	'https://drive.google.com/uc?export=view&id=1h6bgv1bKW6WuIl3dlU8pYc5oJuX7oSmZ',
	'https://drive.google.com/uc?export=view&id=1iYcQfZibLnyQbh-BjGwUc_sVhNUEhUyt',
	'https://drive.google.com/uc?export=view&id=1irubCSCCKLy5HMZDiJDXPvXk6y9dWUtQ',
	'https://drive.google.com/uc?export=view&id=1jF83MEszqEQrPlF-v04XwFnVMmZKESXZ',
	'https://drive.google.com/uc?export=view&id=1lFSsPpxKz1U6JSVVRSznxrP9So6KVfMG',
	'https://drive.google.com/uc?export=view&id=1lJsvJZyVvq5EPNBf2IGKYvEZlCsAw0im',
	'https://drive.google.com/uc?export=view&id=1lKVCC5ez_qSxs3UbLW4KJYEb9nZtajJD',
	'https://drive.google.com/uc?export=view&id=1m9qagQo_JB56I9RXu13RjOUoPXFqnfeW',
	'https://drive.google.com/uc?export=view&id=1mJYizpIpGfB4z0oFiYb0vQBvM7EE_GUb',
	'https://drive.google.com/uc?export=view&id=1mdrc8qwIgZ7El3Dl4gp8sH9KX0i4c1ab',
	'https://drive.google.com/uc?export=view&id=1n7-RsbRVfRbztnZhbDm8Ks-1P9Jv-tix',
	'https://drive.google.com/uc?export=view&id=1o8dba13t0zEzFaR6FWw5TigESShf9JTD',
	'https://drive.google.com/uc?export=view&id=1p3BRDQsxjbOHR48K6cMns_10wsken-Vz',
	'https://drive.google.com/uc?export=view&id=1tAyMqx4FNr-5n2I7BuSsnCnznMI8VVR-',
	'https://drive.google.com/uc?export=view&id=1tG0p3NUmBJ6AdQZZ5jL2T4FNu4sYEkKq',
	'https://drive.google.com/uc?export=view&id=1tYDAn_uWd_Uw2i00nNXCRnsBUadGmf4L',
	'https://drive.google.com/uc?export=view&id=1tZGMwvp7QYNPcdPzjslbtyMNFHTweLZ6',
	'https://drive.google.com/uc?export=view&id=1uMbcbjuo6eIZ4aZF6TuidMo5-MXgASsy'
]