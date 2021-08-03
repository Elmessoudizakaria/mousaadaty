/*
 * File Created: Tuesday, 3rd August 2021 10:04:44 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Tuesday, 3rd August 2021 10:04:44 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import image from '../assets/user.jpg';
export const HelpItemComponent = () => {
  return (
    <div className="list-item">
      <div className="item-image">
        <img src={image} style={{ width: '100%', height: '100%' }} />
      </div>
      <div>
        <div className="item-title">اسم الشخص</div>
        <div className="item-desc">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا
          يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من
          برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
          إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث
          ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين
          ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة،
          وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
        </div>
        <div className="item-detail">
          <div style={{ display: 'flex' ,gap:'10px'}}>
            <a className="item-detail-link">تبرع</a>
            <label>3000 DH : مجموع التبرعات</label>
          </div>
          <a className="item-detail-link">شاهد المزيد</a>
        </div>
      </div>
    </div>
  );
};
