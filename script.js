// The English content lives in index.html so the page is useful without JavaScript.
// All translations are local: no third-party services, trackers, or fonts.
const chinese = {
  skip: '跳转到正文',
  navResearch: '研究方向', navPublications: '论文', navExperience: '经历', navContact: '联系',
  heroRole: '机器人工程 · 哈尔滨工业大学',
  heroIntro: '我是哈尔滨工业大学未来技术学院机器人工程专业本科生，目前在银河通用机器人（Galbot）担任算法实习生。我的研究兴趣包括视觉语言动作（VLA）模型、人形机器人强化学习和机器人数据系统。',
  emailMe: '邮箱',
  researchTitle: '研究方向',
  interest1Title: '视觉语言动作模型',
  interest1Body: '面向机器人操作任务，开展 VLA 模型调研、微调与推理部署，关注从示范数据中学习动作策略。',
  interest2Title: '人形机器人强化学习',
  interest2Body: '使用深度强化学习训练人形机器人的运动与摔倒起身策略，并完成从仿真环境到真实机器人的迁移部署。',
  interest3Title: '机器人数据与系统',
  interest3Body: '机器人与第一视角数据采集、处理流程开发、硬件集成，以及可复现的实机实验验证。',
  publicationsTitle: '论文发表', coauthor: 'MEIE 2026 · 共同作者',
  publicationBody: '参与算法实现、实验验证与性能测试，负责实验结果分析，并参与论文实验部分的完善与修改。',
  experienceTitle: '实践与教育经历',
  galbotDate: '2026.07 — 至今', galbotTitle: '银河通用机器人（Galbot）', galbotRole: '算法实习生',
  galbotBody: '参与具身智能数据基础设施与第一视角视频处理流程开发，涉及手部关键点检测、6D 位姿估计及仿真环境重定向。',
  hitDate: '2023.09 — 2027.06<br>（预计毕业）', hitTitle: '哈尔滨工业大学', hitRole: '本科 · 机器人工程',
  hitBody: '未来技术学院。修读动力学与控制、数学分析、工程仿真模拟、传感与测试技术等课程。',
  projectsTitle: '代表项目',
  project1Title: '人形机器人运动与起身策略',
  project1Body: '参与 RoboTac 项目，在 MJLab 中使用深度强化学习与 AMP 训练运动及摔倒起身策略，并部署到真实人形机器人。',
  project2Title: '基于 VLA 的人形机器人双臂操作',
  project2Body: '担任学生项目组长，完成双臂操作示范数据采集、VLA 模型微调及实机推理部署。',
  communityTitle: '开源贡献与获奖', openSourceLabel: '开源贡献', openSourceTitle: '《动手学具身智能》',
  openSourceRole: '浙江大学开源教程项目',
  openSourceBody: '参与实机操作章节编写，完善机器人硬件产业与生态部分，并参与教程文档修订、校对及实验验证。',
  awardsLabel: '部分获奖', award1: 'RoboTac 人形机器人搏击赛、拳击力量专项赛', award1Level: '全国二等奖',
  award2: '智能感知比赛', award2Level: '省二等奖', award3: '专项人民奖学金', award3Level: '哈尔滨工业大学',
  toolbox: '常用工具', contactEyebrow: '联系我', contactTitle: '一起交流机器人研究。',
  contactBody: '欢迎通过学校邮箱联系我，交流科研问题与学术工作。',
  footerAffiliation: '哈尔滨工业大学', backToTop: '返回顶部'
};

const translatedElements = [...document.querySelectorAll('[data-i18n]')];
const english = Object.fromEntries(translatedElements.map(element => [element.dataset.i18n, element.innerHTML]));
const languageButton = document.getElementById('language-toggle');

function setLanguage(language) {
  const isChinese = language === 'zh-CN';
  const content = isChinese ? chinese : english;
  document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
  for (const element of translatedElements) {
    const value = content[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  }
  languageButton.textContent = isChinese ? 'EN' : '中文';
  languageButton.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换到中文');
  document.title = isChinese ? '李卓洋 | 机器人与具身智能' : 'Zhuoyang Li | Robotics & Embodied Intelligence';
  try { localStorage.setItem('homepage-language', document.documentElement.lang); } catch { /* Storage is optional. */ }
}

languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh-CN' : 'en'));
try { if (localStorage.getItem('homepage-language') === 'zh-CN') setLanguage('zh-CN'); } catch { /* Keep the English default. */ }
document.getElementById('year').textContent = new Date().getFullYear();
