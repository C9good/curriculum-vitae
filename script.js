document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
        pageIndicator.textContent = `${index + 1} / ${pages.length}`;
    }

    prevBtn.addEventListener('click', () => {
        currentPage = (currentPage - 1 + pages.length) % pages.length;
        showPage(currentPage);
    });

    nextBtn.addEventListener('click', () => {
        currentPage = (currentPage + 1) % pages.length;
        showPage(currentPage);
    });

    // 初始显示第一页
    showPage(currentPage);

    const gpaCtx = document.getElementById('gpaChart').getContext('2d');  
    new Chart(gpaCtx, {  
        type: 'bar',  
        data: {  
            labels: ['大一', '大二', '大三'],  
            datasets: [{  
                label: 'GPA排名',  
                data: [1, 18, 2],  
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // 更改背景颜色为更鲜明的青色  
                borderColor: 'rgba(75, 192, 192, 1)',  
                borderWidth: 2, // 增加边框宽度  
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)', // 更改悬停时的背景颜色  
                hoverBorderColor: 'rgba(0, 0, 0, 1)' // 更改悬停时的边框颜色为黑色  
            }]  
        },  
        options: {  
            responsive: true, // 确保图表响应式设计  
            plugins: {  
                title: {  
                    display: true,  
                    text: 'GPA排名',  
                    font: {  
                        size: 20, // 增加标题字体大小  
                        family: 'Arial', // 设置标题字体  
                        color: '#333' // 设置标题颜色为深灰色  
                    }  
                },  
                tooltip: {  
                    enabled: true,  
                    mode: 'index',  
                    intersect: false,  
                    backgroundColor: 'rgba(0,0,0,0.8)', // 设置提示框背景颜色  
                    borderColor: '#ccc', // 设置提示框边框颜色  
                    borderWidth: 1, // 设置提示框边框宽度  
                    titleFont: {  
                        size: 14, // 设置提示框标题字体大小  
                        family: 'Arial', // 设置提示框标题字体  
                        color: '#333' // 设置提示框标题颜色  
                    },  
                    bodyFont: {  
                        size: 12, // 设置提示框内容字体大小  
                        family: 'Arial', // 设置提示框内容字体  
                        color: '#666' // 设置提示框内容颜色  
                    }  
                },  
                legend: {  
                    display: true,  
                    position: 'top', // 将图例放置在顶部  
                    labels: {  
                        font: {  
                            size: 20, // 设置图例字体大小  
                            family: 'Arial', // 设置图例字体  
                            color: '#333' // 设置图例颜色  
                        }  
                    }  
                }  
            },  
            scales: {  
                y: {  
                    beginAtZero: true,  
                    reverse: true,  
                    max: 100, // 根据实际情况调整最大值，使图表更加紧凑  
                    ticks: {  
                        callback: function(value) {  
                            return value.toString(); // 确保Y轴标签正确显示  
                        },  
                        font: {  
                            size: 12, // 设置Y轴标签字体大小  
                            family: 'Arial', // 设置Y轴标签字体  
                            color: '#333' // 设置Y轴标签颜色  
                        }  
                    },  
                    grid: {  
                        drawOnChartArea: false, // 不在图表区域内绘制网格线  
                        color: 'rgba(0, 0, 0, 0.1)' // 设置网格线颜色为淡灰色  
                    }  
                },  
                x: {  
                    ticks: {  
                        font: {  
                            size: 12, // 设置X轴标签字体大小  
                            family: 'Arial', // 设置X轴标签字体  
                            color: '#333' // 设置X轴标签颜色  
                        }  
                    }  
                }  
            }  
        }  
    });

 
        const gpaCtx2 = document.getElementById('gpaChart2').getContext('2d');  
        const data = {  
            labels: ['高数上', '高数下', '高级语言程序设计', '数据结构','Matlab语言及应用','网页设计与制作', '计算机网络', '单片机课程设计'],  
            datasets: [{  
                label: '课程成绩',  
                data: [98, 98, 98, 97, 91, 90, 89, 99],  
                backgroundColor: [  
                    'rgba(75, 192, 192, 0.2)',  
                    'rgba(153, 102, 255, 0.2)',  
                    'rgba(255, 159, 64, 0.2)',  
                    'rgba(255, 99, 132, 0.2)',  
                    'rgba(54, 162, 235, 0.2)',  
                ],  
                borderColor: [  
                    'rgba(75, 192, 192, 1)',  
                    'rgba(153, 102, 255, 1)',  
                    'rgba(255, 159, 64, 1)',  
                    'rgba(255, 99, 132, 1)',  
                    'rgba(54, 162, 235, 1)',  
                ],  
                borderWidth: 1  
            }]  
        };  
      
        const config2 = {  
            type: 'bar',  
            data: data,  
            options: {  
                scales: {  
                    y: {  
                        beginAtZero: true  
                    }  
                }  
            }  
        };  
        new Chart(gpaCtx2, config2);  

    // 技能图表
    const skillsCtx = document.getElementById('skillsChart').getContext('2d');
    new Chart(skillsCtx, {
        type: 'radar',
        data: {
            labels: ['Java', 'Spring', 'MySQL', 'Redis', 'Linux', '前端', 'python'],
            datasets: [{
                label: '技能熟练度',
                data: [88, 85, 80, 75, 70, 70, 85],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '技能熟练度'
                }
            }
        }
    });

    // 悬停效果
    const hometown = document.getElementById('hometown');
    const hometownPopup = document.getElementById('hometown-popup');
    const blog = document.getElementById('blog');
    const blogPopup = document.getElementById('blog-popup');

    hometown.addEventListener('mouseenter', () => {
        hometownPopup.style.display = 'block';
    });

    hometown.addEventListener('mouseleave', () => {
        hometownPopup.style.display = 'none';
    });

    blog.addEventListener('mouseenter', () => {
        blogPopup.style.display = 'block';
    });

    blog.addEventListener('mouseleave', () => {
        blogPopup.style.display = 'none';
    });
});